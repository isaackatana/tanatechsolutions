import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/TTS-logo-white.png";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import api from "./api"; // Axios instance

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .get("/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setIsLoggedIn(true);
          setUsername(res.data.username);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        });
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    try {
      const res = await api.post("/login", {
        username: username.value,
        password: password.value,
      });
      localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);
      setUsername(username.value);
      setShowLoginForm(false);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials.");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { username, email, password } = e.target.elements;
    try {
      const res = await api.post("/register", {
        username: username.value,
        email: email.value,
        password: password.value,
      });
      localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);
      setUsername(username.value);
      setShowSignupForm(false);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed.");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    alert("Reset password feature coming soon.");
    setShowResetForm(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/");
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
              <button className="auth-btn" onClick={() => setShowLoginForm(true)}>Login</button>
              <button className="auth-btn signup" onClick={() => setShowSignupForm(true)}>Sign Up</button>
            </>
          ) : (
            <>
              <div className="user-icon">
                <Link to="/dashboard" title="Dashboard"><FaUserCircle /></Link>
                <span>{username}</span>
              </div>
              <button className="auth-btn logout" onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      {/* Login Modal */}
      {showLoginForm && (
        <div className="auth-modal">
          <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input name="username" type="text" placeholder="Username" required />
              <input name="password" type="password" placeholder="Password" required />
              <button type="submit">Login</button>
              <p className="forgot-password" onClick={() => {
                setShowLoginForm(false);
                setShowResetForm(true);
              }}>Forgot your password?</p>
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
              <input name="username" type="text" placeholder="Username" required />
              <input name="email" type="email" placeholder="Email" required />
              <input name="password" type="password" placeholder="Password" required />
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
