import React from 'react';
import './ContactMe.css';
import profilePic from '../images/profile-avatar.svg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin, FaGithub } from 'react-icons/fa';
import { contactMe, profileBanner } from '../data/portfolioData';

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt={contactMe.name} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{contactMe.name}</h3>
          <p className="badge-title">{contactMe.title}</p>
          <p className="badge-description">{contactMe.summary}</p>
          <p className="badge-company">{contactMe.companyUniversity}</p>
          <a
            href={contactMe.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
          <a
            href={profileBanner.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
            style={{ marginLeft: '12px' }}
          >
            <FaGithub className="linkedin-icon" /> GitHub
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${contactMe.email}`} className="contact-link">
            {contactMe.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${contactMe.phoneNumber.replace(/\s/g, '')}`} className="contact-link">
            {contactMe.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
