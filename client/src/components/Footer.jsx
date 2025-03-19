import React from 'react';
import Logo from '../assets/TTS-logo.png';
import { FaEnvelope, FaMapPin, FaPhone } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="contact">
          <Link to="/">
            <img src={Logo} alt="Tana Tech Logo" className="footer-logo" />
          </Link>
          <ul>
            <li><FaPhone /> +254 100 434 316</li>
            <li><FaPhone /> +254 743 195 701</li>
            <li><FaEnvelope /> info@tanatechstudios.com</li>
            <li><FaMapPin /> Ukunda, Diani – Opposite</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h3>Quick Links</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>

      {/* Copyright */}
      <p className="copyright">© {new Date().getFullYear()} Tana Tech Studios - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
