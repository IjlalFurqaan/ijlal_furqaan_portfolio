import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import netflixSound from './netflix-sound.mp3';
import './NetflixTitle.css';

const EXIT_DURATION_MS = 2400;

const PRIMARY_RED = { r: 229, g: 9, b: 20 }; // #E50914
const DARK_RED = { r: 106, g: 0, b: 0 }; // #6A0000

// Perspective camera: streaks live in a 3D slab and fly toward the viewer,
// like the light beams in the Netflix ident. Depth does the parallax for us —
// far lines cluster around the vanishing point, near ones sweep past the edges.
const Z_FAR = 3.5;
const Z_NEAR = 0.15;
const FOCAL = 0.55; // focal length as a fraction of viewport height

interface Streak {
  wx: number; // world x, spread around the camera axis
  wy: number; // world y of the streak's top
  z: number; // depth; shrinks as the streak approaches
  vz: number; // approach speed, world units/s
  vy: number; // slow downward drift, world units/s
  len: number; // world-space length
  width: number; // px width at z = 1
  baseAlpha: number;
  age: number; // seconds since spawn, for a soft fade-in
  // Twinkle: occasional slow brighten-and-fade
  twinkle: number; // 0..1 current boost
  twinklePhase: number; // seconds into current cycle
  twinkleDelay: number; // seconds until next twinkle
  twinkleDuration: number;
}

interface Particle {
  x: number; // 0..1 of width
  y: number; // px
  size: number; // px radius
  speed: number; // px/s upward drift
  swayAmp: number;
  swayFreq: number;
  phase: number;
  alpha: number;
}

const rand = (min: number, max: number) => min + Math.random() * (max - min);

const makeStreak = (spawnAnywhere: boolean): Streak => ({
  wx: rand(-2.4, 2.4),
  wy: rand(-1.15, 0.9),
  z: spawnAnywhere ? rand(Z_NEAR + 0.2, Z_FAR) : rand(Z_FAR * 0.75, Z_FAR),
  vz: rand(0.045, 0.16),
  vy: rand(0.01, 0.05),
  len: rand(0.15, 0.5),
  width: rand(0.9, 1.9),
  baseAlpha: rand(0.16, 0.48),
  age: spawnAnywhere ? rand(2, 10) : 0, // pre-aged so the first frame isn't blank
  twinkle: 0,
  twinklePhase: 0,
  twinkleDelay: rand(2, 14),
  twinkleDuration: rand(1.5, 3.5),
});

const makeParticle = (height: number): Particle => ({
  x: Math.random(),
  y: rand(0, height),
  size: rand(0.8, 2.4),
  speed: rand(4, 14),
  swayAmp: rand(4, 18),
  swayFreq: rand(0.1, 0.3),
  phase: rand(0, Math.PI * 2),
  alpha: rand(0.12, 0.4),
});

// Pre-rendered soft dot sprite so particles don't need per-frame radial gradients.
const makeParticleSprite = (): HTMLCanvasElement => {
  const sprite = document.createElement('canvas');
  sprite.width = sprite.height = 32;
  const ctx = sprite.getContext('2d')!;
  const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  g.addColorStop(0, 'rgba(229, 9, 20, 1)');
  g.addColorStop(0.4, 'rgba(229, 9, 20, 0.35)');
  g.addColorStop(1, 'rgba(229, 9, 20, 0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 32, 32);
  return sprite;
};

// Cinematic light-beam background on a plain 2D canvas: perspective-projected
// vertical streaks flying toward the camera. No Three.js, no meshes.
const RainOfLight: React.FC<{ exiting: boolean }> = ({ exiting }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const exitingRef = useRef(exiting);
  exitingRef.current = exiting;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let streaks: Streak[] = [];
    let particles: Particle[] = [];
    const sprite = makeParticleSprite();

    const populate = () => {
      // Density scales with viewport width; ~220 streaks on desktop, fewer on mobile.
      const streakCount = Math.round(Math.min(Math.max(width / 6, 90), 260));
      streaks = Array.from({ length: streakCount }, () => makeStreak(true));
      const particleCount = Math.round(Math.min(Math.max(width / 30, 24), 70));
      particles = Array.from({ length: particleCount }, () => makeParticle(height));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      populate();
    };

    const drawStreak = (s: Streak) => {
      const scale = (FOCAL * height) / s.z; // px per world unit at this depth
      const x = width / 2 + s.wx * scale;
      if (x < -60 || x > width + 60) return;
      const yTop = height / 2 + s.wy * scale;
      const lenPx = s.len * scale;
      if (yTop > height || yTop + lenPx < 0) return;

      // Closeness 0 (far) → 1 (near): drives brightness, width and hue
      const near = Math.min(Math.max((Z_FAR - s.z) / (Z_FAR - 0.5), 0), 1);
      const fadeIn = Math.min(s.age / 1.5, 1);
      const boost = s.twinkle;
      const alpha = Math.min(s.baseAlpha * (0.2 + 0.8 * near) * (1 + boost * 2.2) * fadeIn, 0.85);
      const c = {
        r: DARK_RED.r + (PRIMARY_RED.r - DARK_RED.r) * near,
        g: DARK_RED.g + (PRIMARY_RED.g - DARK_RED.g) * near,
        b: DARK_RED.b + (PRIMARY_RED.b - DARK_RED.b) * near,
      };

      const gradient = ctx.createLinearGradient(0, yTop, 0, yTop + lenPx);
      gradient.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);
      gradient.addColorStop(0.5, `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`);
      gradient.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = Math.min(s.width * (0.35 + near * 1.6) + boost * 0.8, 4);
      ctx.beginPath();
      ctx.moveTo(x, yTop);
      ctx.lineTo(x, yTop + lenPx);
      ctx.stroke();
    };

    const draw = (elapsed: number, dt: number) => {
      ctx.clearRect(0, 0, width, height);
      // Additive blending makes overlapping streaks glow instead of muddying.
      ctx.globalCompositeOperation = 'lighter';

      const speedFactor = exitingRef.current ? 8 : 1; // Enter click → warp burst

      for (const s of streaks) {
        s.z -= s.vz * speedFactor * dt;
        s.wy += s.vy * dt;
        s.age += dt;
        if (s.z <= Z_NEAR) {
          Object.assign(s, makeStreak(false));
        }
        // Advance the twinkle cycle: wait, then a smooth sine brighten-and-fade
        s.twinklePhase += dt;
        if (s.twinklePhase > s.twinkleDelay) {
          const t = (s.twinklePhase - s.twinkleDelay) / s.twinkleDuration;
          if (t >= 1) {
            s.twinkle = 0;
            s.twinklePhase = 0;
            s.twinkleDelay = rand(3, 16);
            s.twinkleDuration = rand(1.5, 3.5);
          } else {
            s.twinkle = Math.sin(t * Math.PI);
          }
        }
        drawStreak(s);
      }

      for (const p of particles) {
        p.y -= p.speed * dt;
        if (p.y < -10) {
          Object.assign(p, makeParticle(height), { y: height + 10 });
        }
        const x = p.x * width + Math.sin(elapsed * p.swayFreq + p.phase) * p.swayAmp;
        const d = p.size * 6;
        ctx.globalAlpha = p.alpha;
        ctx.drawImage(sprite, x - d / 2, p.y - d / 2, d, d);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    };

    resize();
    window.addEventListener('resize', resize);

    let raf = 0;
    let last = performance.now();
    const start = last;

    if (reducedMotion) {
      // Single static frame: the streaks still set the scene, nothing moves.
      draw(0, 0);
    } else {
      const loop = (now: number) => {
        // Clamp dt so a backgrounded tab doesn't teleport everything on return
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        draw((now - start) / 1000, dt);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="intro-canvas" aria-hidden="true" />;
};

const NetflixTitle: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    if (isExiting) return;
    const audio = new Audio(netflixSound);
    audio.play().catch((error) => console.error('Audio play error:', error));
    setIsExiting(true);
  };

  useEffect(() => {
    if (!isExiting) return;
    const timer = setTimeout(() => navigate('/browse'), EXIT_DURATION_MS);
    return () => clearTimeout(timer);
  }, [isExiting, navigate]);

  return (
    <div className={`intro-container ${isExiting ? 'exiting' : ''}`}>
      <RainOfLight exiting={isExiting} />
      <div className="intro-vignette" aria-hidden="true" />

      <div className="intro-overlay">
        <h1 className="intro-name">Ijlal Furqaan</h1>
        <button className="start-button" onClick={handleStart} disabled={isExiting}>
          <span className="start-button-label">Enter</span>
        </button>
        <p className="enter-hint">Click to enter</p>
      </div>
    </div>
  );
};

export default NetflixTitle;
