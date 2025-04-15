import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function BlogPost() {
  const { slug } = useParams(); // Extract slug from URL params
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog post from the backend API
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${slug}`); // Update with your backend API URL
        if (!response.ok) {
          throw new Error('Failed to fetch the blog post');
        }
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{post ? `${post.title} | Tana Tech Studios` : 'Loading...'} </title>
        <meta name="description" content={post ? post.summary : 'Loading...'} />
      </Helmet>

      <section className="blog-post-detail">
        <div className="container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            post && (
              <>
                <h1>{post.title}</h1>
                <p className="post-date">{post.date}</p>
                <div className="post-content">
                  {post.content.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default BlogPost;
