import React from 'react';
import './AboutUs.css';
import { FaGithub, FaLinkedin, FaPhone, FaInstagram, FaEnvelope, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-me">
      <h2 className="about-title">About Me</h2>
      
      <div className="about-content">
        <div className="left-section">
          <div className="profile-image">
            <img src="/profile-pic.png" alt="Jay Patel" />
          </div>
          
          {/* Name and title under the photo */}
          <div className="bio-section">
            <h3>Jay Patel</h3>
            <p>B.Tech IT Student</p>
          </div>
        </div>
        
        <div className="right-section">
          <div className="profile-info">
            <p>
              Currently pursuing B.Tech in Information Technology, passionate about
              web development and emerging technologies. With expertise in MERN
              Stack development and strong foundation in OOP using Java and Python,
              I am also enthusiastic about AI/ML technologies.
            </p>
          </div>
        </div>
      </div>
      
      <div className="social-links">
        <a href="https://github.com/Jay-ptl2210" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jay-patel-it-221004-" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="tel:+917041151519" className="social-icon">
          <FaPhone />
        </a>
        <a href="https://www.instagram.com/jay_ptl_2210?igsh=b2s2ODZjZjRqNW5x" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="mailto:jaydptl.22@gmail.com" className="social-icon">
          <FaEnvelope />
        </a>
        <a href="https://jayptlportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGlobe />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
