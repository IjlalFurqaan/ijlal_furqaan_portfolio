import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaGithub, FaGoogle, FaJava, FaPython, FaRobot, FaBrain, FaChartLine, FaSearch } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiHtml5, SiCss, SiFirebase, SiTerraform, SiTypescript, SiGraphql, SiFlask, SiOpencv, SiGithubactions, SiPytorch, SiFastapi, SiCplusplus, SiCmake, SiOllama, SiRedis, SiMui, SiVite, SiStreamlit, SiSocketdotio, SiGooglegemini, SiHuggingface, SiPrisma, SiClaude, SiReactquery, SiTailwindcss, SiRedux } from 'react-icons/si';
import { projects } from '../data/portfolioData';

const techIcons: { [key: string]: React.JSX.Element } = {
  'React': <FaReact />,
  'ReactJS': <FaReact />,
  'TypeScript': <SiTypescript />,
  'Node.js': <FaNodeJs />,
  'NodeJS': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Python': <FaPython />,
  'Java': <FaJava />,
  'Flask': <SiFlask />,
  'GraphQL': <SiGraphql />,
  'Firestore': <SiFirebase />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'AWS': <FaAws />,
  'Terraform': <SiTerraform />,
  'Docker': <FaDocker />,
  'GitHub Actions': <SiGithubactions />,
  'GitHub': <FaGithub />,
  'PostgreSQL': <SiPostgresql />,
  'MongoDB': <SiMongodb />,
  'HTML5': <SiHtml5 />,
  'CSS3': <SiCss />,
  'OpenCV': <SiOpencv />,
  'YOLO': <SiOpencv />,
  'RAG': <FaRobot />,
  'LangChain': <FaRobot />,
  'PyTorch': <SiPytorch />,
  'FastAPI': <SiFastapi />,
  'C++': <SiCplusplus />,
  'CMake': <SiCmake />,
  'Ollama': <SiOllama />,
  'Redis': <SiRedis />,
  'MUI': <SiMui />,
  'Vite': <SiVite />,
  'Streamlit': <SiStreamlit />,
  'Socket.io': <SiSocketdotio />,
  'Gemini': <SiGooglegemini />,
  'React Flow': <FaReact />,
  'Qwen2.5-VL': <FaRobot />,
  'Qwen2.5': <FaRobot />,
  'Qwen2': <FaRobot />,
  'Qwen3': <FaRobot />,
  'Hugging Face': <SiHuggingface />,
  'ROME': <FaBrain />,
  'PASTA': <FaBrain />,
  'repeng': <FaBrain />,
  'NLI': <FaBrain />,
  'VADER NLP': <FaBrain />,
  'ChromaDB': <FaDatabase />,
  'IndexedDB': <FaDatabase />,
  'BM25': <FaSearch />,
  'Claude API': <SiClaude />,
  'Prisma': <SiPrisma />,
  'Zustand': <SiRedux />,
  'TanStack Query': <SiReactquery />,
  'Highcharts': <FaChartLine />,
  'Tailwind': <SiTailwindcss />,
  'WebSocket': <FaDatabase />,
  'AG-Grid': <FaReact />,
};

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <header className="projects-header">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">From local LLM steering to systems programming. Built end to end, shipped on GitHub.</p>
      </header>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.08}s` } as React.CSSProperties}
          >
            <div className="project-image-wrap">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || <FaRobot />} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
