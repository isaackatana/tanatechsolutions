import express, { json } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
import { connectDB } from './database/connectDB.js';
import computersRoute from './routes/computersRoute.js';
import cors from 'cors'

// Middleware
app.use(json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Routes
app.use('/api/computers', computersRoute);

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on Port ${PORT}`);
});
