import express, { json } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(json());

// Routes
import authRoutes from './routes/auth.route.js';
import computersRoute from './routes/computersRoute.js';
import { connectDB } from './database/connectDB.js';

app.get('/', (req, res)=>{
  res.send("Hello world")
})

app.use('/api/auth', authRoutes);
app.use('/api/computers', computersRoute);

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on Port ${PORT}`);
});
