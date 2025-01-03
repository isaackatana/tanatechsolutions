import { Schema, model } from 'mongoose';

const computerSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  specs: { type: Object, default: {} },
});

export default model('Computer', computerSchema);
