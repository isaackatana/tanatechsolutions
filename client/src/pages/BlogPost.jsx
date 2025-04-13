import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Sample blog data
const blogPosts = [
  {
    slug: "the-future-of-web-development",
    title: "The Future of Web Development: Trends to Watch",
    content: `
      Web development is constantly evolving. In this post, we explore key trends like Progressive Web Apps, Serverless architecture, and AI integration that are reshaping how we build for the web...
    `,
    date: "March 1, 2025"
  },
  {
    slug: "how-ai-is-transforming-businesses",
    title: "How AI is Transforming Businesses",
    content: `
      Artificial Intelligence is no longer a buzzword—it's a business tool. From chatbots to predictive analytics, this post dives into real-world examples of AI in action...
    `,
    date: "February 15, 2025"
  },
  {
    slug: "building-scalable-web-applications-with-react",
    title: "Building Scalable Web Applications with React",
    content: `
      Learn how to make your React apps scalable with techniques like code-splitting, lazy loading, state management, and smart component architecture...
    `,
    date: "January 20, 2025"
  },
];

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Tana Tech Studios</title>
        <meta name="description" content={post.summary || post.content.slice(0, 150)} />
      </Helmet>

      <section className="blog-post-detail">
        <div className="content">
          <h1>{post.title}</h1>
          <p className="blog-date">{post.date}</p>
          <p>{post.content}</p>
        </div>
      </section>
    </>
  );
}

export default BlogPost;
