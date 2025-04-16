import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import blogRoutes from './routes/blogRoutes.js';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Frontend domain
}));
app.use(express.json());

// Routes
app.use('/blogs', blogRoutes);

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
