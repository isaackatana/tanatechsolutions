import React, { useState } from "react";
import { Helmet } from "react-helmet";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could be an API call or other logic)
    alert("Form submitted!");
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Tana Tech Studios</title>
        <meta name="description" content="Get in touch with Tana Tech Studios. We provide tech solutions and digital services to elevate your business." />
      </Helmet>

      <section className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h1>Contact Us</h1>
            <p>
              We’d love to hear from you. Whether you have a question or want to book a session,
              feel free to get in touch with us using the form below, or you can reach us through
              other channels.
            </p>
            <div className="contact-details">
              <p><strong>Email:</strong> info@tanatechstudios.com</p>
              <p><strong>Phone:</strong> +254 100 434 316</p>
              <p><strong>Location:</strong> Ukunda, Diani – Opposite</p>
            </div>
            <div className="map">
              {/* You can embed a Google Map iframe here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.1342686313157!2d39.52365501412376!3d-4.309010944713801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18407aebc7d71227%3A0xb2f202b53a6eb038!2sTana%20Tech%20Studios!5e0!3m2!1sen!2ske!4v1624573152861!5m2!1sen!2ske"
                width="100%"
                height="300"
                style={{ border: "0", borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
