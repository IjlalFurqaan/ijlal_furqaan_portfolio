import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { profileBanner } from '../data/portfolioData';

const ProfileBanner: React.FC = () => {
  const handlePlayClick = () => {
    window.open(profileBanner.resumeUrl, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(profileBanner.linkedinUrl, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{profileBanner.headline}</h1>
        <p className="banner-description">
          {profileBanner.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
