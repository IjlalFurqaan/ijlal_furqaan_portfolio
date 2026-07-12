import React from 'react';
import './WorkPermit.css';
import { workPermit } from '../data/portfolioData';

const WorkPermit: React.FC = () => {
  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🛂 Work Permit · {workPermit.location}</h2>
        <p className="work-permit-summary">
          <strong>{workPermit.visaStatus}</strong>
        </p>
        <p className="work-permit-summary">{workPermit.summary}</p>
        <p className="additional-info">{workPermit.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
