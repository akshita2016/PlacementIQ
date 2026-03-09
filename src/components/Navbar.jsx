import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  // Don't show navbar on auth pages
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🎯 PlacementIQ
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
        
        <div className="nav-auth">
          {isAuthenticated ? (
            <div className="user-menu">
              <button className="user-button" onClick={toggleUserMenu}>
                <span className="user-avatar">👤</span>
                <span className="user-name">{user?.name || 'User'}</span>
                <span className={`dropdown-arrow ${showUserMenu ? 'open' : ''}`}>▼</span>
              </button>
              
              {showUserMenu && (
                <div className="user-dropdown">
                  <div className="user-info">
                    <div className="user-details">
                      <div className="user-display-name">{user?.name}</div>
                      <div className="user-email">{user?.email}</div>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={() => setShowUserMenu(false)}>
                    <span className="item-icon">📊</span>
                    My Progress
                  </button>
                  <button className="dropdown-item" onClick={() => setShowUserMenu(false)}>
                    <span className="item-icon">⚙️</span>
                    Settings
                  </button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item logout" onClick={handleLogout}>
                    <span className="item-icon">🚪</span>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="auth-btn login-btn">
                Sign In
              </Link>
              <Link to="/signup" className="auth-btn signup-btn">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay to close user menu when clicking outside */}
      {showUserMenu && (
        <div className="menu-overlay" onClick={() => setShowUserMenu(false)}></div>
      )}
    </nav>
  );
}

export default Navbar;