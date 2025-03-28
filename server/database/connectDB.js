import mongoose from "mongoose";
const dbURI = process.env.MONGO_URI || 'mongodb+srv://mrisaackatana:<db_password>@tts-db.h6gojew.mongodb.net/?retryWrites=true&w=majority&appName=TTS-DB'

export const connectDB = async () => {
    try {
    const conn = await mongoose.connect(dbURI);
    console.log(`MongoDB connected...${conn.connection.host} `);
    } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
    }
};