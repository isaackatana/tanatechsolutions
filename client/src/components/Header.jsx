import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/TTS-logo-white.png";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowSignupForm(false);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    alert("Password reset link sent to your email.");
    setShowResetForm(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Tana Tech Studios Logo" />
          </Link>
        </div>

        <nav className={menuOpen ? "nav-open" : ""}>
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <div className="user-auth">
          {!isLoggedIn ? (
            <>
              <li>
                <button className="auth-btn" onClick={() => setShowLoginForm(true)}>Login</button>
              </li>
              <li>
                <button className="auth-btn signup" onClick={() => setShowSignupForm(true)}>Sign Up</button>
              </li>
            </>
          ) : (
            <>
              <li className="user-icon">
                <Link to="/dashboard" title="Dashboard" aria-label="Dashboard">
                  <FaUserCircle />
                </Link>
              </li>
              <li>
                <button className="auth-btn logout" onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </div>

        <div className="burger" onClick={toggleMenu} aria-label="Toggle navigation menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      {/* Modals */}
      {showLoginForm && (
        <div className="auth-modal">
          <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
              <p
                className="forgot-password"
                onClick={() => {
                  setShowLoginForm(false);
                  setShowResetForm(true);
                }}
              >
                Forgot your password?
              </p>
              <button type="button" onClick={() => setShowLoginForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {showSignupForm && (
        <div className="auth-modal">
          <div className="auth-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
              <button type="button" onClick={() => setShowSignupForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {showResetForm && (
        <div className="auth-modal">
          <div className="auth-form">
            <h2>Reset Password</h2>
            <form onSubmit={handleResetPassword}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Send Reset Link</button>
              <button type="button" onClick={() => setShowResetForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
