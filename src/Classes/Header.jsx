import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Static/Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <h1>Welcome to indpon.com</h1>
      <nav>
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          {/* You can add your hamburger icon here */}
          ☰ 
        </div>

        {/* Original nav links, now always visible */}
        <div className="nav-links"> {/* Add a class for styling */}
          <Link to="/about">About</Link>
          <Link to="/create/user">Create User</Link>
          <Link to="/todo">Indpon Todo List</Link>
          <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/K5rxmxvT83">Indpon's discord server</a>
        </div>

        {/* Mobile menu, conditionally shown */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/about">About</Link>
          <Link to="/create/user">Create User</Link>
          <Link to="/todo">Indpon Todo List</Link>
          <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/K5rxmxvT83">Indpon's discord server</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
