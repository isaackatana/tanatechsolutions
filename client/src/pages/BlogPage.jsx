import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const res = await axios.get('/api/blogs'); // Uses Vite proxy
        setBlogPosts(res.data);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
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

          {loading && <p>Loading blog posts...</p>}
          {error && <p className="error">Error: {error}</p>}

          {!loading && !error && (
            blogPosts.length > 0 ? (
              <div className="blog-list">
                {blogPosts.map((post) => (
                  <div key={post._id} className="blog-post">
                    <h2>{post.title}</h2>
                    <p className="blog-date">{new Date(post.date).toDateString()}</p>
                    <p>{post.summary || "No summary available."}</p>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      Read More →
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p>No blog posts found.</p>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default Blog;
