import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity, FaGoogle, FaGithub, FaMicrosoft } from 'react-icons/fa';
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

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
