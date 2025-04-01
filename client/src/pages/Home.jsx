import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
    <Helmet>
      {/* Meta Title */}
      <title>Tana Tech Studios | Innovative Digital Solutions for Your Business</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="Tana Tech Studios delivers cutting-edge digital solutions, including web & app development, AI integration, and custom software. Elevate your business with innovation and technology."
      />

      {/* Meta Keywords */}
      <meta
        name="keywords"
        content="Tana Tech Studios, web development, app development, AI solutions, custom software, digital transformation, tech consultancy, software development"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Tana Tech Studios | Innovative Digital Solutions" />
      <meta
        property="og:description"
        content="Transform your business with cutting-edge technology. Web & app development, AI solutions, and custom software tailored for success."
      />
      <meta property="og:image" content="https://images.stockcake.com/public/9/a/5/9a5b33df-e8ca-48c5-bc08-789789b47e7f_large/recording-studio-tech-stockcake.jpg" />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tana Tech Studios | Innovative Digital Solutions" />
      <meta
        name="twitter:description"
        content="Digital solutions built for growth. Web, mobile, AI, and custom software development."
      />
      <meta name="twitter:image" content="https://yourwebsite.com/home-twitter-image.jpg" />
    </Helmet>
    <div className="hero">
      <img src="https://images.stockcake.com/public/9/a/5/9a5b33df-e8ca-48c5-bc08-789789b47e7f_large/recording-studio-tech-stockcake.jpg" alt="" />
      <div className='hero-details'>
        <h1>Record Your Content</h1>
        <p>Audio and Video Production Services</p>
        <button>Book Now</button>
      </div>
    </div>
    </>
  )
}

export default Home