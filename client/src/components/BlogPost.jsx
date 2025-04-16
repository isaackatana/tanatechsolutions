import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const res = await axios.get(`/api/blogs/${slug}`);
        setPost(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load blog post.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>
          {post ? `${post.title} | Tana Tech Studios` : "Loading..."}
        </title>
        <meta
          name="description"
          content={post?.summary || "Read a blog post from Tana Tech Studios."}
        />
      </Helmet>

      <section className="blog-post-detail">
        <div className="container">
          {loading && <p>Loading blog post...</p>}
          {error && <p className="error">Error: {error}</p>}

          {!loading && !error && post && (
            <article>
              <h1>{post.title}</h1>
              <p className="post-date">
                {post.date
                  ? new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Unknown date"}
              </p>
              <div className="post-content">
                {(post.content || "No content available.")
                  .split("\n")
                  .map((line, index) => (
                    <p key={index}>{line.trim()}</p>
                  ))}
              </div>
            </article>
          )}
        </div>
      </section>
    </>
  );
}

export default BlogPost;
