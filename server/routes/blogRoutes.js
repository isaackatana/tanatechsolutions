import express from 'express';
import {
  getAllBlogs,
  getBlogBySlug,
  createBlog
} from '../controllers/blogController.js';

const router = express.Router();

// GET all blogs
router.get('/', getAllBlogs);

// GET blog by slug
router.get('/:slug', getBlogBySlug);

// POST a new blog
router.post('/', createBlog);

export default router;
