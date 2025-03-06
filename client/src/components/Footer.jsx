import React from 'react'
import Logo from '../assets/tana-tech-logo (svg).svg'
import {FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
function Footer() {
  return (
    <>
    <footer>
      <nav>
        <div className="contact">
          <Link to='/'><img src={Logo} alt=""/></Link>
          <ul>
            <li><FaPhone/>+254 100 434 316</li>
            <li><FaPhone/>+254 743 195 701</li>
            <li><FaEnvelope/> info@tanatechstudios.com</li>
            <li><FaMapPin/> Ukunda Diani – Opposite </li>
          </ul>
        </div>
        <div className='quick-links'>
          <h3>Quick Links</h3>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/portfolio'>Portfolio</NavLink>
          <NavLink to='/course'>Courses</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
      </nav>
        <p>© 2025 Tana Tech Studios - All Rights Reserved</p>
    </footer>
    </>
  )
}

export default Footer