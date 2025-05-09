import React, { useEffect, useState } from 'react'

function BlogList() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
  
    useEffect(() => {
      const fetchBlogPosts = async () => {
        try {
          const res = await axios.get("/api/blogs"); // Fetches blog posts
          setBlogPosts(res.data);
        } catch (err) {
          setError(err.response?.data?.message || "An error occurred while fetching posts.");
        } finally {
          setLoading(false);
        }
      };
  
      // Check if the user is logged in by checking for a JWT token in localStorage
      const checkUserLoginStatus = () => {
        const token = localStorage.getItem("authToken"); // Replace with your token storage method
        setUserLoggedIn(!!token);
      };
  
      fetchBlogPosts();
      checkUserLoginStatus();
    }, []);
  return (
    <>
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
                    <img src={post.thumbnail} alt="" />
                    <h2>{post.title}</h2>
                    <p className="blog-date">{new Date(post.date).toDateString()}</p>
                    <p>{post.summary || "No summary available."}</p>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      Read More →
                    </Link>
                    {userLoggedIn && (
                      <Link to={`/blog/${post.slug}/comment`} className="comment-link">
                        Add Comment
                      </Link>
                    )}
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
  )
}

export default BlogList