import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-top">
        <div className="logo-and-title">
          <div className="logo-placeholder">
            <img src="/path-to-logo.png" alt="Logo" width="50" height="50" />
          </div>
          <a href="/" style={{ textDecoration: 'none', marginBottom: '10px' }}>
            <h2>VistaKitchen</h2>
          </a>
        </div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/interior">Kitchens</Link></li>
            <li><Link to="/interior">Wardrobes</Link></li>
            <li><Link to="/floors">Vanities</Link></li>
            <li><Link to="/ceilings">Floorings</Link></li>
            <li><Link to="/panels">Ceilings</Link></li>
          </ul>
        </nav>

        <div className="profile">
          {/* Profile content here */}
        </div>
      </div>

      {/* Header bottom retained only for styling */}
      <div className="header-bottom"></div>
    </header>
  );
}

export default Header;
