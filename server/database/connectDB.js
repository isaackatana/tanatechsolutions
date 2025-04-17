import mongoose from "mongoose";
const dbURI = process.env.MONGO_URI

export const connectDB = async () => {
    try {
    const conn = await mongoose.connect(dbURI);
    console.log(`MongoDB connected...${conn.connection.host} `);
    } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
    }
};