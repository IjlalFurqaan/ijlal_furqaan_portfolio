import React from 'react';
import './Skills.css';
import { skills } from '../data/portfolioData';
import { Skill } from '../types';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaPython, FaAngular, FaDatabase, FaRobot, FaBrain, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPostgresql, SiMysql, SiMongodb, SiGooglecloud, SiSpringboot, SiGraphql, SiFlask, SiRedux, SiTerraform, SiLinux, SiTensorflow, SiPytorch, SiFirebase, SiExpress } from 'react-icons/si';

const iconMap: { [key: string]: React.JSX.Element } = {
  FaPython: <FaPython />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  FaJava: <FaJava />,
  FaDatabase: <FaDatabase />,
  FaRobot: <FaRobot />,
  FaBrain: <FaBrain />,
  SiGooglecloud: <SiGooglecloud />,
  SiTensorflow: <SiTensorflow />,
  SiPytorch: <SiPytorch />,
  FaReact: <FaReact />,
  FaAngular: <FaAngular />,
  SiRedux: <SiRedux />,
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  SiGraphql: <SiGraphql />,
  SiSpringboot: <SiSpringboot />,
  SiFlask: <SiFlask />,
  FaAws: <FaAws />,
  SiTerraform: <SiTerraform />,
  FaDocker: <FaDocker />,
  FaGithub: <FaGithub />,
  SiLinux: <SiLinux />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  SiFirebase: <SiFirebase />,
};

const Skills: React.FC = () => {
  const skillsByCategory = skills.reduce((acc: { [key: string]: Skill[] }, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
