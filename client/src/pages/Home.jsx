import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        {/* Meta Title */}
        <title>Tana Tech Studios | Tech & Production Solutions</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Tana Tech Studios offers innovative digital solutions, including web & app development, AI integration, and professional audio/video production services."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Tana Tech Studios, web development, app development, AI solutions, custom software, audio production, video production, recording studio, tech consultancy"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Tana Tech Studios | Tech & Production Solutions" />
        <meta
          property="og:description"
          content="Transform your business with cutting-edge technology and high-quality audio/video production services."
        />
        <meta property="og:image" content="https://images.stockcake.com/public/9/a/5/9a5b33df-e8ca-48c5-bc08-789789b47e7f_large/recording-studio-tech-stockcake.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tana Tech Studios | Tech & Production Solutions" />
        <meta
          name="twitter:description"
          content="Expert digital solutions and professional content production services at Tana Tech Studios."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/home-twitter-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://images.stockcake.com/public/9/a/5/9a5b33df-e8ca-48c5-bc08-789789b47e7f_large/recording-studio-tech-stockcake.jpg"
          alt="Professional recording studio"
          className="hero-image"
        />
        <div className="hero-details">
          <h1>Elevate Your Digital Presence</h1>
          <p>Expert Tech Solutions & Professional Content Production</p>
          <button>Get in Touch</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F91polur10vt0b2jkbvuh.jpg" alt="" />
            <div>
            <h3>Web & App Development</h3>
            <p>Custom-built software solutions to take your business to the next level.</p>
            </div>
            
          </div>
          <div className="service-item">
          <img src="https://now.digital/wp-content/uploads/2024/08/DALL%C2%B7E-2024-08-07-10.31.59-A-professional-office-environment-with-a-team-of-consultants-working-on-AI-data-technology-implementation.-The-scene-includes-a-large-digital-screen-d.webp" alt="" />
            <div>
            <h3>AI & Tech Consultancy</h3>
            <p>Leverage AI and cutting-edge technology for automation and efficiency.</p>
            </div>
          </div>
          <div className="service-item">
          <img src="https://www.casualfilms.com/hubfs/Audio%20mix.png" alt="" />
          <div>
            <h3>Audio & Video Production</h3>
            <p>High-quality recording, editing, and production services for content creators.</p>
          </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact us today to get started with our tech and production services.</p>
        <button>Get in Touch</button>
      </section>
    </>
  );
}

export default Home;
