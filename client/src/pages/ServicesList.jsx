import React from 'react'

function ServicesList() {

  const services = [
    {
      title: "Web & App Development",
      image: "https://via.placeholder.com/300",
      description:
        "Tailored full-stack web and app solutions to bring your ideas to life. We specialize in building scalable, robust, and user-friendly applications.",
      link: "/services/web-app-development",
    },
    {
      title: "AI & Tech Consultancy",
      image: "https://via.placeholder.com/300",
      description:
        "Leverage artificial intelligence and the latest tech to automate processes, enhance decision-making, and increase your operational efficiency.",
      link: "/services/ai-tech-consultancy",
    },
    {
      title: "Audio & Video Production",
      image: "https://via.placeholder.com/300",
      description:
        "High-quality audio and video production services that help bring your creative projects to life. We offer everything from recording to post-production.",
      link: "/services/audio-video-production",
    },
    {
      title: "Cloud Solutions & Automation",
      image: "https://via.placeholder.com/300",
      description:
        "Cloud computing services to scale your business effortlessly. We offer cloud storage, management, and automation tools to enhance productivity.",
      link: "/services/cloud-solutions",
    },
  ];
  
  return (
    <>
    <section className="services">
        <h1>Our Services</h1>
        <p>We provide a range of innovative digital solutions to elevate your business.</p>

        <div className="service-list">
        {services.map((service, index) => (
            <div key={index} className="service-item">
            <img
                src={service.image}
                alt={service.title}
                className="service-image"
            />
            <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.link} className="btn">Learn More</a>
            </div>
            </div>
        ))}
        </div>
    </section>
    </>
  )
}

export default ServicesList