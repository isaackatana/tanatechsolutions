import express from 'express';
import Comment from '../models/commentModel.js';
import authenticateUser from '../middleware/authMiddleware.js'; // Import the authentication middleware

const router = express.Router();

// GET comments for a blog post
router.get('/:slug', async (req, res) => {
  try {
    const comments = await Comment.find({ blogSlug: req.params.slug }).sort({ date: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch comments' });
  }
});

// POST a new comment on a blog post (only if logged in)
router.post('/:slug', authenticateUser, async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: 'Content is required' });
  }

  try {
    const newComment = new Comment({
      blogSlug: req.params.slug,
      content,
      user: req.user._id, // Save the user's ID with the comment
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: 'Failed to post comment' });
  }
});

export default router;
