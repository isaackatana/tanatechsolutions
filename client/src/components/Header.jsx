import React, { useState, useEffect } from "react";
import Logo from "../assets/TTS-logo-white.png";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import UserLogin from "./auth/UserLogin";

function Header() {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [authType, setAuthType] = useState("login"); // "login" or "register"
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!isMenuOpen);
  };

  const openAuthModal = (type) => {
    setAuthType(type);
    setAuthOpen(true);
  };

  const closeAuthModal = () => {
    setAuthOpen(false);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAuthOpen && !event.target.closest(".auth-modal")) {
        closeAuthModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isAuthOpen]);

  return (
    <>
      <header className="sticky-header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Tana Tech Logo" />
          </Link>
        </div>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <NavLink to="/" onClick={() => setMenuIsOpen(false)}>Home</NavLink>
            <NavLink to="/projects" onClick={() => setMenuIsOpen(false)}>Projects</NavLink>
            <NavLink to="/courses" onClick={() => setMenuIsOpen(false)}>Courses</NavLink>
            <NavLink to="/contact" onClick={() => setMenuIsOpen(false)}>Contact</NavLink>
          </ul>
          <div className="userAccount">
            <div className="shopping-cart">
              <FaShoppingCart />
              <span>0</span>
            </div>
            <div className="user-login">
              {!isLoggedIn ? (
                <>
                  <button className="login-btn" onClick={() => openAuthModal("login")}>
                    Login
                  </button>
                  <button className="register-btn" onClick={() => openAuthModal("register")}>
                    Register
                  </button>
                </>
              ) : (
                <div className="profile">
                  <FaUser />
                  <ul>
                    <li>Profile</li>
                    <li>My Courses</li>
                    <li onClick={() => setIsLoggedIn(false)}>Log Out</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="burger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </header>

      {/* Auth Modal */}
      {isAuthOpen && (
        <div className="auth-overlay">
          <div className="auth-modal">
            <span className="close-btn" onClick={closeAuthModal}>
              &times;
            </span>
            <UserLogin authType={authType} setIsLoggedIn={setIsLoggedIn} closeAuthModal={closeAuthModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
