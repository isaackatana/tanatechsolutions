import React from 'react'

function ServicesList() {

  const services = [
    {
      title: "Web & App Development",
      image: "https://unvired.com/wp-content/uploads/2021/02/app-development-frameworks.png",
      description:
        "Tailored full-stack web and app solutions to bring your ideas to life. We specialize in building scalable, robust, and user-friendly applications.",
      link: "/services/web-app-development",
    }, 
    {
      title: "AI & Tech Consultancy",
      image: "https://redresscompliance.com/wp-content/uploads/2024/02/what-is-AI-consulting-1024x585.webp",
      description:
        "Leverage artificial intelligence and the latest tech to automate processes, enhance decision-making, and increase your operational efficiency.",
      link: "/services/ai-tech-consultancy",
    },
    {
      title: "Audio & Video Production",
      image: "https://www.casualfilms.com/hubfs/Audio%20mix.png",
      description:
        "High-quality audio and video production services that help bring your creative projects to life. We offer everything from recording to post-production.",
      link: "/services/audio-video-production",
    },
    {
      title: "Cloud Solutions & Automation",
      image: "https://testgrid.io/blog/wp-content/uploads/2024/02/Top-Cloud-Automation-Testing-Tools.jpg",
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