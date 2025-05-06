import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes.js';
import authRoutes from './routes/authRoutes.js'; // If you have or plan to add auth
import commentRoutes from './routes/commentRoutes.js'; // For comments if modular

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://mrisaackatana:PwCCnbqinh30ZsnK@tts-db.ozfppo7.mongodb.net/?retryWrites=true&w=majority&appName=TTS-DB'

// Connect to MongoDB
mongoose.connect(MONGO_URI)
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(cors({
  origin: 'https://tana-tech-solutions.onrender.com', // Frontend URL
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/blogs', blogRoutes);
app.use('/auth', authRoutes);         // Auth (login/signup)
app.use('/comments', commentRoutes);  // Comments

// Root route (optional)
app.get('/', (req, res) => {
  res.send('🌐 Tana Tech Studios API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
