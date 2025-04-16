import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// GET /blogs - Fetch all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 }); // Sort by latest
    res.json(blogs);
  } catch (err) {
    console.error('Error fetching blog posts:', err);
    res.status(500).json({ message: 'Unable to fetch blog posts' });
  }
});

// GET /blogs/:slug - Fetch a single blog post by slug
router.get('/:slug', async (req, res) => {
  try {
    const post = await Blog.findOne({ slug: req.params.slug });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error('Error fetching blog post:', err);
    res.status(500).json({ message: 'Unable to fetch the blog post' });
  }
});

// POST /blogs - Create a new blog post
router.post('/', async (req, res) => {
  try {
    const { title, summary, content, slug, date } = req.body;

    // Simple validation
    if (!title || !slug || !content) {
      return res.status(400).json({ message: 'Title, slug, and content are required' });
    }

    // Check if slug already exists
    const existing = await Blog.findOne({ slug });
    if (existing) {
      return res.status(409).json({ message: 'Slug already exists. Choose a unique one.' });
    }

    const newPost = new Blog({
      title,
      summary,
      content,
      slug,
      date: date || new Date()
    });

    const savedPost = await newPost.save();
    res.status(201).json({ message: '✅ Blog post saved!', post: savedPost });
  } catch (err) {
    console.error('Error saving blog post:', err);
    res.status(500).json({ message: '❌ Failed to save blog post' });
  }
});

export default router;
