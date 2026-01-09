import React, { useState, useEffect } from 'react';
import './style.css';
import MobileMenu from './Mobilemenu.js';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  // Detect screen size on mount and on resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 992);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="bg-black">
      <div className="max-container">
        <nav className="navbar">
          <a href="https://www.metadata.digital/" className="logo-link">
            <img className="logo_metalik" src="/image.png" alt="logo" />
          </a>
          <ul className={`links-container ul-screen-big nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a className="nav_links_a" href="https://www.metatikdigital.net/">Home</a></li>
          <li><a className="nav_links_a" href="https://www.metatikdigital.net/about">About</a></li>
          <li><a className="nav_links_a" href="https://www.metatikdigital.net/services">Services</a></li>
          <li><a className="nav_links_a" href="https://www.metatikdigital.net/case-studies">Case studies</a></li>
          <li><a className="nav_links_a" href="/form">Form</a></li>
          <li><button className="get_in_touch">Get In Touch</button></li>
        </ul>
          {/* Hamburger Icon */}
          {isMobileScreen && (
            <div className="menu-toggle" onClick={toggleMenu}>
              <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile menu rendered only on small screens */}
      {isMobileScreen && (
        <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />
      )}
    </div>
  );
}

export default Navbar;
