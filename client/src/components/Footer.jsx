import React from 'react'
import Logo from '../assets/Tana-Tech-Logo-(white-PNG).png'
import {FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";
function Footer() {
  return (
    <>
    <footer>
      <nav>
        <div className="contact">
          <img src={Logo} alt="" />
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
          <li>Spares & Repairs</li>
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