import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/TTS-logo-white.png";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add actual auth logic here
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add actual sign-up logic here
    setIsLoggedIn(true);
    setShowSignupForm(false);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Add actual password reset logic here
    alert("Password reset link sent to your email.");
    setShowResetForm(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Tana Tech Studios Logo" />
          </Link>
        </div>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>

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
                  <Link to="/dashboard" title="Dashboard">
                    <FaUserCircle size={24} />
                  </Link>
                </li>
                <li>
                  <button className="auth-btn logout" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>

      {/* Login Modal */}
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

      {/* Signup Modal */}
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

      {/* Reset Password Modal */}
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
