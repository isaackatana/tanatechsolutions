import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.stockcake.com/public/9/a/5/9a5b33df-e8ca-48c5-bc08-789789b47e7f_large/recording-studio-tech-stockcake.jpg",
      title: "Innovative Digital Solutions",
      subtitle:
        "We provide cutting-edge web, app, and AI solutions that transform your business.",
      button: "Discover More",
    },
    {
      image:
        "https://images.stockcake.com/public/9/a/5/9a5b33df-e8ca-48c5-bc08-789789b47e7f_large/recording-studio-tech-stockcake.jpg",
      title: "Professional Content Production",
      subtitle:
        "From high-quality audio production to video content creation, we help bring your vision to life.",
      button: "Book a Session",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Helmet>
        {/* Meta Tags */}
        <title>Tana Tech Studios | Tech & Production Solutions</title>
        <meta
          name="description"
          content="Tana Tech Studios offers innovative digital solutions, including web & app development, AI integration, and professional audio/video production services."
        />
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
        <meta
          property="og:image"
          content="https://images.stockcake.com/public/9/a/5/9a5b33df-e8ca-48c5-bc08-789789b47e7f_large/recording-studio-tech-stockcake.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tana Tech Studios | Tech & Production Solutions" />
        <meta
          name="twitter:description"
          content="Expert digital solutions and professional content production services at Tana Tech Studios."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/home-twitter-image.jpg"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img
              src={slide.image}
              alt="Professional recording studio"
              className="hero-image"
            />
            <div className="hero-details">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button>{slide.button}</button>
            </div>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <img
              src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F91polur10vt0b2jkbvuh.jpg"
              alt="Web and App Development"
            />
            <div>
              <h3>Web & App Development</h3>
              <p>
                Tailored full-stack web and app solutions to bring your ideas to
                life. We specialize in building scalable, robust, and user-friendly
                applications that suit your business needs.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img
              src="https://now.digital/wp-content/uploads/2024/08/DALL%C2%B7E-2024-08-07-10.31.59-A-professional-office-environment-with-a-team-of-consultants-working-on-AI-data-technology-implementation.-The-scene-includes-a-large-digital-screen-d.webp"
              alt="AI & Tech Consultancy"
            />
            <div>
              <h3>AI & Tech Consultancy</h3>
              <p>
                Leverage artificial intelligence and the latest tech to automate processes,
                enhance decision-making, and increase your operational efficiency.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img
              src="https://www.casualfilms.com/hubfs/Audio%20mix.png"
              alt="Audio & Video Production"
            />
            <div>
              <h3>Audio & Video Production</h3>
              <p>
                High-quality audio and video production services that help bring your
                creative projects to life. We offer everything from recording to post-production
                for both corporate and creative media.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img
              src="https://media.istockphoto.com/photos/cloud-computing-picture-id914345178"
              alt="Cloud Solutions & Automation"
            />
            <div>
              <h3>Cloud Solutions & Automation</h3>
              <p>
                Cloud computing services to scale your business effortlessly. We offer
                cloud storage, management, and automation tools that reduce overheads
                and improve team productivity.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img
              src="https://www.apple.com/newsroom/images/product/mac/lifestyle/mac_hero_04_200806.jpg.large.jpg"
              alt="Branding & Digital Marketing"
            />
            <div>
              <h3>Branding & Digital Marketing</h3>
              <p>
                Enhance your brand presence with SEO, social media marketing, content
                creation, and digital strategies. Our expert team ensures your business
                reaches the right audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Elevate Your Business?</h2>
          <p>Transform your digital presence with cutting-edge tech solutions and high-quality content production. Let’s work together to bring your vision to life.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn primary-btn">Get in Touch</Link>
            <Link to="/services" className="cta-btn secondary-btn">Explore Our Services</Link>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
