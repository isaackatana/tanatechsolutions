import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog posts from the backend API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/blogs'); // Update with your backend API URL
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | Tana Tech Studios</title>
        <meta
          name="description"
          content="Read our latest blog posts on web development, AI, tech innovations, and more."
        />
        <meta property="og:title" content="Blog | Tana Tech Studios" />
        <meta
          property="og:description"
          content="Read our latest blog posts on web development, AI, tech innovations, and more."
        />
      </Helmet>

      <section className="blog">
        <div className="blog-content">
          <h1>Latest Posts</h1>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="blog-list">
              {blogPosts.map((post) => {
                return (
                  <div key={post._id} className="blog-post">
                    <h2>{post.title}</h2>
                    <p className="blog-date">{post.date}</p>
                    <p>{post.summary}</p>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      Read More →
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Blog;
