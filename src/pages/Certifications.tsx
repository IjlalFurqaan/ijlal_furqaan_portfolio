import React from 'react';
import './Certifications.css';
import { FaUniversity, FaGoogle, FaGithub, FaMicrosoft } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiLinux } from 'react-icons/si';
import { certifications } from '../data/portfolioData';

const iconData: { [key: string]: React.JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'google': <FaGoogle />,
  'github': <FaGithub />,
  'microsoft': <FaMicrosoft />,
  'linux': <SiLinux />,
  'university': <FaUniversity />,
};

// Issuer brand color for the icon tile and hover glow
const iconColors: { [key: string]: string } = {
  'udemy': '#a435f0',
  'coursera': '#2f6fe0',
  'google': '#4285f4',
  'github': '#c9d1d9',
  'microsoft': '#00a4ef',
  'linux': '#f0c674',
  'university': '#e50914',
};

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <header className="certifications-header">
        <h2 className="certifications-title">Certifications</h2>
        <p className="certifications-subtitle">Credentials and programs that back the stack.</p>
      </header>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="certification-card"
            style={{
              '--delay': `${index * 0.1}s`,
              '--accent': iconColors[cert.iconName] || '#e50914',
            } as React.CSSProperties}
          >
            <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
            <div className="certification-content">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
