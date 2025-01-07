import mongoose from 'mongoose';

const computerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  specs: { type: String, required: false },
  imageUrl: { type: String, required: false }, // optional image field
});

const Computer = mongoose.model('Computer', computerSchema);

export default Computer;
