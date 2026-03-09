import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Placement Helper
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dsa" className={`nav-link ${isActive('/dsa')}`}>
              DSA Sheet
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/subjects" className={`nav-link ${isActive('/subjects')}`}>
              Core Subjects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className={`nav-link ${isActive('/resume')}`}>
              Resume Guide
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/interview" className={`nav-link ${isActive('/interview')}`}>
              Interview Questions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;