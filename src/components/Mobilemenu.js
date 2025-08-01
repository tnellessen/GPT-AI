// components/MobileMenu.jsx
import React from 'react';
import './style.css';

function MobileMenu({ isOpen, toggleMenu }) {
  return (
    <>
      {isOpen && <hr className="mobile-hr" />}
      <ul className={`links-container nav-links ${isOpen ? 'active' : ''}`}>
        <li><a className="nav_links_a" href="/" onClick={toggleMenu}>Home</a></li>
        <li><a className="nav_links_a" href="/about" onClick={toggleMenu}>About</a></li>
        <li><a className="nav_links_a" href="/contact" onClick={toggleMenu}>Services</a></li>
        <li><a className="nav_links_a" href="/contact" onClick={toggleMenu}>Case studies</a></li>
        <li><button className="get_in_touch" onClick={toggleMenu}>Get In Touch</button></li>
      </ul>
    </>
  );
}

export default MobileMenu;