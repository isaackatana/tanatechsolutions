import { default as mongoose } from "mongoose";

export const connectDB = async () => {
    try {
    const conn = await mongoose.connect('mongodb+srv://mrisaackatana:cNGgDWakEKNMvtaY@tanatech.vbpzf.mongodb.net/?retryWrites=true&w=majority&appName=TanaTech');
    console.log(`MongoDB connected...${conn.connection.host} `);
    } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
    }
};