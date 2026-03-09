import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Placement Helper</h3>
          <p>Your Complete Placement Preparation Guide</p>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/dsa">DSA Sheet</a></li>
              <li><a href="/subjects">Core Subjects</a></li>
              <li><a href="/resume">Resume Guide</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/interview">Interview Questions</a></li>
              <li><a href="#practice">Practice Tests</a></li>
              <li><a href="#tips">Placement Tips</a></li>
              <li><a href="#companies">Company Insights</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Placement Helper. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;