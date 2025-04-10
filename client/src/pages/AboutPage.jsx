import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Tana Tech Studios</title>
        <meta name="description" content="Learn more about Tana Tech Studios, our mission, and the team behind the innovation." />
      </Helmet>

      <section className="about">
        <div className="about-content">
          <h1>About Tana Tech Studios</h1>
          <p>
            At Tana Tech Studios, we provide innovative digital solutions to help businesses grow and succeed in the digital era.
            We specialize in custom web and app development, AI-driven services, content production, and much more.
          </p>

          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower businesses by delivering cutting-edge technology solutions, creating engaging digital content,
              and fostering innovation that transforms the way our clients operate and interact with their audience.
            </p>
          </div>

          <div className="about-vision">
            <h2>Our Vision</h2>
            <p>
              To be a global leader in tech innovation, offering creative, reliable, and scalable solutions that not only meet but exceed client expectations.
            </p>
          </div>

          <div className="about-team">
            <h2>Meet Our Team</h2>
            <div className="team-list">
              <div className="team-member">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="team-member-image"
                />
                <h3>John Doe</h3>
                <p>CEO & Founder</p>
                <p>John leads the charge at Tana Tech Studios, constantly pushing the boundaries of what’s possible with tech and innovation.</p>
              </div>

              <div className="team-member">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="team-member-image"
                />
                <h3>Jane Smith</h3>
                <p>Lead Developer</p>
                <p>Jane heads our development team, ensuring all our projects are executed to perfection, with a strong focus on scalability and efficiency.</p>
              </div>

              <div className="team-member">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="team-member-image"
                />
                <h3>Emily Brown</h3>
                <p>Creative Director</p>
                <p>Emily is our visionary creative director, overseeing all design and media production efforts to ensure that our clients receive nothing short of excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
