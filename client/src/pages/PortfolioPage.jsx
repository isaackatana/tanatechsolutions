import React from "react";
import { Helmet } from "react-helmet";

function Portfolio() {
  const projects = [
    {
      title: "Web Development",
      image: "https://bimitbetter.com/wp-content/uploads/2024/09/custom-web-application-development.webp",
      description: "A modern responsive web application built using React and Node.js.",
      link: "/projects/web-development"
    },
    {
      title: "Mobile App Development",
      image: "https://via.placeholder.com/300",
      description: "A cross-platform mobile app developed using Flutter.",
      link: "/projects/mobile-app-development"
    },
    {
      title: "E-commerce Platform",
      image: "https://via.placeholder.com/300",
      description: "An advanced e-commerce platform built with Next.js and MongoDB.",
      link: "/projects/e-commerce-platform"
    },
    {
      title: "AI Chatbot",
      image: "https://via.placeholder.com/300",
      description: "AI-powered chatbot for customer support, developed with Python and TensorFlow.",
      link: "/projects/ai-chatbot"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio | Tana Tech Studios</title>
        <meta name="description" content="Explore the projects and work we've done at Tana Tech Studios." />
      </Helmet>

      <section className="portfolio">
        <h1>Our Portfolio</h1>
        <p>Check out some of the amazing projects we have worked on.</p>
        
        <div className="portfolio-list">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
