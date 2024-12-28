import React from 'react'
import Logo from '../assets/Tana-Tech-Logo-(png).png'

function Footer() {
  return (
    <>
    <footer>
      <div className="contact">
        <img src={Logo} alt="" />
        <ul>
          <li>+254 100 434 316</li>
          <li>+254 743 195 701</li>
          <li>info@tanatech.co.ke</li>
          <li>Ukunda Diani – Opposite </li>
        </ul>
      </div>
        <p>© 2025 Tana Tech Limited - All Rights Reserved</p>
    </footer>
    </>
  )
}

export default Footer