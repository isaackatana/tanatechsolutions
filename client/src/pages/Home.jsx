import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ServicesList from "./ServicesList";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = [
    {
      image:
        "https://www.ldsystems.com/wp-content/uploads/2021/02/LDSystems-HES-Green-Screen-1-2.jpg",
      title: "Innovative Digital Solutions",
      subtitle:
        "We provide cutting-edge web, app, and AI solutions that transform your business.",
      buttonText: "Discover More",
      buttonLink: "/services",
    },
    {
      image:
        "https://images.stockcake.com/public/9/a/5/9a5b33df-e8ca-48c5-bc08-789789b47e7f_large/recording-studio-tech-stockcake.jpg",
      title: "Professional Content Production",
      subtitle:
        "From high-quality audio production to video content creation, we help bring your vision to life.",
      buttonText: "Book a Session",
      buttonLink: "#", // Changed from "/book"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideButtonClick = (index) => {
    if (slides[index].buttonText === "Book a Session") {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Tana Tech Studios | Tech & Production Solutions</title>
        {/* Meta tags remain unchanged */}
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} className="hero-image" />
            <div className="hero-details">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button
                className="hero-btn"
                onClick={() => handleSlideButtonClick(index)}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </section>

      <ServicesList/>

      {/* Modal Popup Form */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h2>Book a Session</h2>
            <form className="booking-form">
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Preferred Date:
                <input type="date" name="date" required />
              </label>
              <label>
                Message:
                <textarea name="message" rows="4" />
              </label>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
