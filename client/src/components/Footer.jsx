import React from 'react'
import Logo from '../assets/tana-tech-logo (svg).svg'
import {FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";
import { Link } from 'react-router';
function Footer() {
  return (
    <>
    <footer>
      <nav>
        <div className="contact">
          <Link to='/'><img src={Logo} alt="" /></Link>
          <ul>
            <li><FaPhone/>+254 100 434 316</li>
            <li><FaPhone/>+254 743 195 701</li>
            <li><FaEnvelope/> info@tanatech.co.ke</li>
            <li><FaMapPin/> Ukunda Diani – Opposite </li>
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <li>Home</li>
          <li>Computers</li>
          <li>Phones</li>
        </div>
      </nav>
        <p>© 2025 Tana Tech Limited - All Rights Reserved</p>
    </footer>
    </>
  )
}

export default Footer