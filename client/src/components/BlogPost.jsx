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
  const [user, setUser] = useState(null);
  const [reactions, setReactions] = useState({});
  const [userReaction, setUserReaction] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      setUser(decoded.user);
    }

    const fetchBlogPost = async () => {
      try {
        const res = await axios.get(`/api/blogs/${slug}`);
        setPost(res.data);
        setReactions(res.data.reactions || {});
        setUserReaction(res.data.userReaction || null);
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

  const handleCommentChange = (event) => setNewComment(event.target.value);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!newComment || !user) return;

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `/api/comments/${slug}`,
        { content: newComment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComments([...comments, res.data]);
      setNewComment("");
    } catch (err) {
      console.error("Error submitting comment", err);
    }
  };

  const handleReaction = async (type) => {
    if (!user) return;
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `/api/reactions/${slug}`,
        { type },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setReactions(res.data.reactions);
      setUserReaction(type);
    } catch (err) {
      console.error("Error reacting to post", err);
    }
  };

  const shareUrl = `${window.location.origin}/blog/${slug}`;

  return (
    <>
      <Helmet>
        <title>{post ? `${post.title} | Tana Tech Studios` : "Loading..."}</title>
        <meta name="description" content={post?.summary || "Read a blog post from Tana Tech Studios."} />
      </Helmet>

      <section className="blog-post-detail">
        <div className="container">
          {loading && <p>Loading blog post...</p>}
          {error && <p className="error">Error: {error}</p>}

          {!loading && !error && post ? (
            <article>
              <h1>{post.title}</h1>
              <p className="post-date">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="post-content">
                {(post.content || "No content available.")
                  .split("\n")
                  .map((line, index) => <p key={index}>{line.trim()}</p>)}
              </div>

              {/* Reactions */}
              <div className="reactions">
                <h3>React to this post:</h3>
                {user ? (
                  <div className="reaction-buttons">
                    {["like", "love", "wow"].map((type) => (
                      <button
                        key={type}
                        onClick={() => handleReaction(type)}
                        className={userReaction === type ? "active" : ""}
                      >
                        {type} ({reactions[type] || 0})
                      </button>
                    ))}
                  </div>
                ) : (
                  <p>You must be logged in to react.</p>
                )}
              </div>

              {/* Share buttons */}
              <div className="share-post">
                <h3>Share this post:</h3>
                <a href={`https://twitter.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">Twitter</a>{" | "}
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">Facebook</a>{" | "}
                <a href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + shareUrl)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
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
