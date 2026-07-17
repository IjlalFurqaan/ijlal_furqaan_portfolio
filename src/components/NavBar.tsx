import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope, FaGraduationCap, FaCaretDown, FaPencilAlt, FaUser, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';
import netflixLogo from '../images/ijlal-logo.svg';
import defaultProfileImage from '../images/profile-recruiter.svg';
import recruiterImage from '../images/profile-recruiter.svg';
import developerImage from '../images/profile-developer.svg';
import stalkerImage from '../images/profile-stalker.svg';
import adventurerImage from '../images/profile-adventurer.svg';

const profiles = [
  { name: 'recruiter', image: recruiterImage, backgroundGif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif' },
  { name: 'developer', image: developerImage, backgroundGif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif' },
  { name: 'stalker', image: stalkerImage, backgroundGif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif' },
  { name: 'adventurer', image: adventurerImage, backgroundGif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const profileImage = location.state?.profileImage || defaultProfileImage;

  // Determine current profile name from the URL or state
  const currentProfileName = location.pathname.includes('/profile/')
    ? location.pathname.split('/profile/')[1]
    : null;

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleProfileSwitch = (profile: typeof profiles[0]) => {
    navigate(`/profile/${profile.name}`, {
      state: { profileImage: profile.image, backgroundGif: profile.backgroundGif },
    });
  };

  // Get profiles that aren't the current one (show others in dropdown)
  const otherProfiles = profiles.filter((p) => p.name !== currentProfileName);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={netflixLogo} alt="Netflix" />
          </Link>
          <ul className="navbar-links">
            <li><Link to="/browse">Home</Link></li>
            <li><Link to="/work-experience">Professional</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact-me">Hire Me</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          {/* Hamburger menu for mobile */}
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Profile dropdown area */}
          <div className="profile-dropdown-wrapper" id="profile-dropdown">
            <div className="profile-trigger">
              <img src={profileImage} alt="Profile" className="profile-icon" />
              <FaCaretDown className="profile-caret" />
            </div>
            <div className="profile-dropdown">
              <div className="profile-dropdown-arrow"></div>
              <div className="profile-dropdown-content">
                {/* Profile switching */}
                <div className="dropdown-profiles">
                  {otherProfiles.map((profile) => (
                    <div
                      key={profile.name}
                      className="dropdown-profile-item"
                      onClick={() => handleProfileSwitch(profile)}
                    >
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="dropdown-profile-avatar"
                      />
                      <span className="dropdown-profile-name">{profile.name}</span>
                    </div>
                  ))}
                </div>

                <div className="dropdown-divider"></div>

                {/* Menu links */}
                <div className="dropdown-menu-links">
                  <Link to="/browse" className="dropdown-link">
                    <FaPencilAlt className="dropdown-link-icon" />
                    <span>Manage Profiles</span>
                  </Link>
                  <Link to="/contact-me" className="dropdown-link">
                    <FaUser className="dropdown-link-icon" />
                    <span>Account</span>
                  </Link>
                  <Link to="/contact-me" className="dropdown-link">
                    <FaQuestionCircle className="dropdown-link-icon" />
                    <span>Help Center</span>
                  </Link>
                </div>

                <div className="dropdown-divider"></div>

                {/* Sign out */}
                <div
                  className="dropdown-signout"
                  onClick={() => navigate('/')}
                >
                  <FaSignOutAlt className="dropdown-link-icon" />
                  <span>Sign out of Netflix</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar (only visible on mobile) */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img src={netflixLogo} alt="Netflix Logo" />
        </div>
        <ul>
          <li><Link to="/browse" onClick={closeSidebar}><FaHome /> Home</Link></li>
          <li><Link to="/work-experience" onClick={closeSidebar}><FaBriefcase /> Professional</Link></li>
          <li><Link to="/education" onClick={closeSidebar}><FaGraduationCap /> Education</Link></li>
          <li><Link to="/skills" onClick={closeSidebar}><FaTools /> Skills</Link></li>
          <li><Link to="/projects" onClick={closeSidebar}><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/contact-me" onClick={closeSidebar}><FaEnvelope /> Hire Me</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

