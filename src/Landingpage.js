import React from "react";
import { Link } from "react-router-dom";
import { FaUserShield, FaUser, FaLock } from "react-icons/fa";
import "./App.css"; // your CSS file

function LandingPage() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="logo">
          <FaUserShield className="icon" />
          <span>SAGE</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-left">
          <h1>
            Secure your<br />
            digital identity with<br />
            <span className="highlight">SAGE</span>
          </h1>

          <h2 className="sage-full-form">
            <span className="letter">S</span>mart&nbsp;
            <span className="letter">A</span>daptive&nbsp;
            <span className="letter">G</span>raph-based&nbsp;
            <span className="letter">E</span>valuation
          </h2>

          <p className="description">
            Revolutionizing security with behavior-driven multi-factor authentication.
          </p>

          <div className="buttons">
            <Link to="/user-login" className="btn btn-user">
              <FaUser /> User Login
            </Link>
            <button className="btn btn-admin">
              <FaLock /> Admin Login
            </button>
          </div>

          <a href="#learn" className="learn-link">Learn how it works →</a>
        </div>

        <div className="hero-right">
          <div className="shield-container">
            <FaUserShield className="shield-icon" />
          </div>
          <p className="right-text">
            Your identity deserves smarter protection. SAGE analyzes behavior to guard access intelligently and adaptively.
          </p>
        </div>
      </div>

      <div className="bottom-wave">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L80,250.7C160,245,320,235,480,213.3C640,192,800,160,960,144C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default LandingPage;
