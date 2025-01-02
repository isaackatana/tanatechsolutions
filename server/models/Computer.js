// backend/models/Computers.js
import { Schema, model } from 'mongoose';

const ComputerSchema = new Schema({
  name: { type: String, required: true },
  thumbnail: { type: String, required: true },
  duration: { type: String, required: true },
});

export default model('Computer', ComputerSchema);
