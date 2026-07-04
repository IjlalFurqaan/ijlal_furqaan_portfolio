import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaGithub, FaGoogle, FaJava, FaPython, FaRobot } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiHtml5, SiCss3, SiFirebase, SiTerraform, SiTypescript, SiGraphql, SiFlask, SiOpencv, SiGithubactions } from 'react-icons/si';
import { projects } from '../data/portfolioData';

const techIcons: { [key: string]: JSX.Element } = {
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
  'CSS3': <SiCss3 />,
  'OpenCV': <SiOpencv />,
  'YOLO': <SiOpencv />,
  'RAG': <FaRobot />,
  'LangChain': <FaRobot />,
  'WebSocket': <FaDatabase />,
  'AG-Grid': <FaReact />,
};

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || '🔧'} {tech}
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
