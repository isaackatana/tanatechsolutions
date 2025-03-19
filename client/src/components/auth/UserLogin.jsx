import React, { useState } from "react";

function UserLogin({ authType, setIsLoggedIn, closeAuthModal }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    closeAuthModal();
  };

  return (
    <div className="auth-form">
      <h2>{authType === "login" ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {authType === "register" && (
          <input type="text" name="name" placeholder="Full Name" required />
        )}
        <button type="submit">{authType === "login" ? "Login" : "Register"}</button>
      </form>
      <p onClick={closeAuthModal} className="close-link">Close</p>
    </div>
  );
}

export default UserLogin;
