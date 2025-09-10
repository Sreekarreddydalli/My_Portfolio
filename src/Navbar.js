import React, { useState } from 'react';
import './Navbar.css';
import HelloWave from './HelloWave';
import Lightning from './Lightning'; // Import Lightning component
import SplitText from './SplitText'; // Import SplitText component

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
      setMenuOpen(false); // Close the dropdown menu
    }
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar-content">
        <div className="navbar">
          <div className="navbar-logo">S</div>

          <div
            className="hamburger-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>

        {menuOpen && (
          <div
            className="dropdown-menu"
            onClick={(e) => {
              if (e.target.classList.contains('dropdown-menu')) {
                setMenuOpen(false);
              }
            }}
          >
            <a
              href="#about"
              className="dropdown-link"
              onClick={() => handleScrollToSection('about')}
            >
              About
            </a>
            <a
              href="#projects"
              className="dropdown-link"
              onClick={() => handleScrollToSection('projects')}
            >
              Projects
            </a>
            <a
              href="https://drive.google.com/drive/folders/13PCHAEP2uF8YenHBelGvHdpkQ4dbGOx_"
              className="dropdown-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="dropdown-link"
              onClick={() => handleScrollToSection('contact')}
            >
              Contact Me
            </a>
          </div>
        )}

        {/* Split Container with Lightning Background */}
        <div className="split-container">
          <div className="lightning-container">
            <Lightning
              hue={220}
              xOffset={0}
              speed={1}
              intensity={1}
              size={1}
            />
          </div>
          <div className="left-container">
            <div className="text-line">
              <SplitText
                text="Hello there!"
                className="welcome-text"
                delay={100}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              />
            </div>
            <div className="text-line">
              <SplitText
                text="I'm Sreekar"
                className="welcome-text"
                delay={120}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              />
            </div>
          </div>
          <div className="right-container">
            <HelloWave />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;