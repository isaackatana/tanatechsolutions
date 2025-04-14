import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// API endpoint to get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error('Error fetching blog posts:', err);
    res.status(500).json({ message: 'Unable to fetch blog posts' });
  }
});

// API endpoint to get a single blog post by slug
router.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const post = await Blog.findOne({ slug });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error('Error fetching blog post:', err);
    res.status(500).json({ message: 'Unable to fetch the blog post' });
  }
});

// POST /blogs - Add a new blog post
router.post('/', async (req, res) => {
    try {
    const { title, summary, content, date } = req.body;

    const newPost = new Blog({ title, summary, content, date });
    const savedPost = await newPost.save();

    res.status(201).json({ message: '✅ Blog post saved!', post: savedPost });
    } catch (error) {
    console.error('Error saving blog post:', error);
    res.status(500).json({ message: '❌ Failed to save blog post' });
    }
});

export default router;
