import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import BlogList from "../components/BlogList";

function Blog() {
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
      <BlogList/>
    </>
  );
}

export default Blog;
