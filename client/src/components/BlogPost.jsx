import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState(null); // Track the logged-in user

  useEffect(() => {
    // Check if the user is logged in (e.g., check local storage for JWT token)
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT token
      setUser(decoded.user); // Set user state from token
    }

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

    const fetchComments = async () => {
      try {
        const res = await axios.get(`/api/comments/${slug}`);
        setComments(res.data);
      } catch (err) {
        console.error("Error loading comments", err);
      }
    };

    fetchBlogPost();
    fetchComments();
  }, [slug]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!newComment || !user) return; // Ensure the user is logged in

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `/api/comments/${slug}`,
        { content: newComment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComments([...comments, res.data]);
      setNewComment(""); // Clear the comment input after submission
    } catch (err) {
      console.error("Error submitting comment", err);
    }
  };

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

          {!loading && !error && post ? (
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
          ) : (
            <p>No blog post found.</p>
          )}

          {/* Comment Section */}
          <div className="comments-section">
            <h2>Comments</h2>
            {user ? (
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  value={newComment}
                  onChange={handleCommentChange}
                  placeholder="Add a comment..."
                  required
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              <p>You must be logged in to comment.</p>
            )}

            <div className="comments-list">
              {comments.length === 0 ? (
                <p>No comments yet.</p>
              ) : (
                comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <p>{comment.content}</p>
                    <p className="comment-date">
                      {new Date(comment.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPost;
