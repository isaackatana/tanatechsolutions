import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  blogSlug: {
    type: String,
    required: true,
    ref: 'Blog', // Optional: Ref to the Blog model if needed
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
