import React from 'react';
import './Skills.css';
import { skills } from '../data/portfolioData';
import { Skill } from '../types';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaPython, FaAngular, FaDatabase, FaRobot, FaBrain, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPostgresql, SiMysql, SiMongodb, SiGooglecloud, SiSpringboot, SiGraphql, SiFlask, SiRedux, SiTerraform, SiLinux, SiTensorflow, SiPytorch, SiFirebase, SiExpress, SiCplusplus, SiC } from 'react-icons/si';

const iconMap: { [key: string]: React.JSX.Element } = {
  FaPython: <FaPython />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  FaJava: <FaJava />,
  SiCplusplus: <SiCplusplus />,
  SiC: <SiC />,
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

// Brand accent per icon — drives the icon tint and the card's hover glow.
const brandColors: { [key: string]: string } = {
  FaPython: '#4b8bbe',
  SiTypescript: '#3178c6',
  SiJavascript: '#f7df1e',
  FaJava: '#e76f00',
  SiCplusplus: '#00599c',
  SiC: '#a8b9cc',
  FaDatabase: '#9d7cd8',
  FaRobot: '#ff6b6b',
  FaBrain: '#ff8fa3',
  SiGooglecloud: '#4285f4',
  SiTensorflow: '#ff8f00',
  SiPytorch: '#ee4c2c',
  FaReact: '#61dafb',
  FaAngular: '#dd0031',
  SiRedux: '#764abc',
  FaNodeJs: '#83cd29',
  SiExpress: '#cfcfcf',
  SiGraphql: '#e535ab',
  SiSpringboot: '#6db33f',
  SiFlask: '#dddddd',
  FaAws: '#ff9900',
  SiTerraform: '#7b42bc',
  FaDocker: '#2496ed',
  FaGithub: '#c9d1d9',
  SiLinux: '#f0c674',
  SiPostgresql: '#699eca',
  SiMongodb: '#4db33d',
  SiMysql: '#00a1c9',
  SiFirebase: '#ffca28',
};

const Skills: React.FC = () => {
  const skillsByCategory = skills.reduce((acc: { [key: string]: Skill[] }, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      <header className="skills-header">
        <h2 className="skills-title">Skills &amp; Technologies</h2>
        <p className="skills-subtitle">The stack I build with, from AI pipelines to production frontends.</p>
      </header>
      {Object.keys(skillsByCategory).map((category, index) => (
        <section
          key={category}
          className="skill-category"
          style={{ '--cat-delay': `${index * 0.12}s` } as React.CSSProperties}
        >
          <div className="category-header">
            <h3 className="category-title">{category}</h3>
            <span className="category-count">{skillsByCategory[category].length}</span>
            <span className="category-line" />
          </div>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill, idx) => (
              <div
                key={skill.name}
                className="skill-card"
                style={{
                  '--delay': `${index * 0.12 + idx * 0.06}s`,
                  '--accent': brandColors[skill.icon] || '#e50914',
                } as React.CSSProperties}
              >
                <div className="skill-icon">{iconMap[skill.icon] || <FaReact />}</div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skills;
