import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Blog() {
  // Sample blog posts, replace with actual data from your backend or CMS
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch",
      summary: "Web development is constantly evolving. Discover the top trends shaping the future of the web, from progressive web apps to serverless architecture.",
      date: "March 1, 2025",
      link: "/blog/the-future-of-web-development"
    },
    {
      title: "How AI is Transforming Businesses",
      summary: "Artificial Intelligence is revolutionizing industries. Learn how AI can enhance operational efficiency, improve customer experiences, and drive innovation.",
      date: "February 15, 2025",
      link: "/blog/how-ai-is-transforming-businesses"
    },
    {
      title: "Building Scalable Web Applications with React",
      summary: "React is one of the most popular front-end frameworks. Learn the best practices for building scalable web applications with React.",
      date: "January 20, 2025",
      link: "/blog/building-scalable-web-applications-with-react"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Tana Tech Studios</title>
        <meta name="description" content="Read our latest blog posts on web development, AI, tech innovations, and more." />
      </Helmet>

      <section className="blog">
        <div className="blog-content">
          <h1>Our Latest Posts</h1>
          
          <div className="blog-list">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-post">
                <h2>{post.title}</h2>
                <p className="blog-date">{post.date}</p>
                <p>{post.summary}</p>
                <Link to={post.link} className="read-more">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
