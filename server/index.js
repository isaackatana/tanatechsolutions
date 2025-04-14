import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import blogRoutes from './routes/blogRoutes.js';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection string
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

app.use(cors());
app.use(cors({
  origin: 'https://tana-tech-studios.onrender.com' // or your actual frontend domain
}));

app.use(express.json());

// Use blogRoutes
app.use('/blogs', blogRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
