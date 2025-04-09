import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/TTS-logo-white.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Tana Tech Studios Logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
