import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import netflixSound from './netflix-sound.mp3';
import './NetflixTitle.css';

const SPHERE_COLOR = '#e50914';
const EXIT_DURATION_MS = 2400;

// Slowly rotating geodesic wireframe sphere; spins up once the user clicks START.
const WireframeSphere: React.FC<{ exiting: boolean }> = ({ exiting }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    const speed = exiting ? 2.4 : 0.18;
    group.rotation.y += delta * speed;
    group.rotation.x += delta * speed * 0.35;
    if (exiting) {
      const s = Math.min(group.scale.x + delta * 1.6, 6);
      group.scale.setScalar(s);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshBasicMaterial color={SPHERE_COLOR} wireframe transparent opacity={0.55} />
      </mesh>
      {/* Inner shell at a lower subdivision gives the layered geodesic look */}
      <mesh rotation={[0.4, 0.8, 0]}>
        <icosahedronGeometry args={[1.45, 1]} />
        <meshBasicMaterial color={SPHERE_COLOR} wireframe transparent opacity={0.22} />
      </mesh>
    </group>
  );
};

// Faint red dots drifting around and behind the sphere.
const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 900;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Random points in a spherical shell so none pile up in front of the text
      const radius = 3.2 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi) - 1.5;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        color={SPHERE_COLOR}
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.35}
        depthWrite={false}
      />
    </Points>
  );
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
      <Canvas
        className="intro-canvas"
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <WireframeSphere exiting={isExiting} />
        <ParticleField />
      </Canvas>

      <div className="intro-overlay">
        <h1 className="intro-name">Ijlal Furqaan</h1>
        <button className="start-button" onClick={handleStart} disabled={isExiting}>
          Start
        </button>
        <p className="enter-hint">Click to enter</p>
      </div>
    </div>
  );
};

export default NetflixTitle;
