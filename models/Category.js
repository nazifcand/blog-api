import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  title: String,
  slug: String,
  description: String,
  status: { type: Boolean, default: false },
  createAt: { type: Boolean, default: Date.now },
  updateAt: { type: Boolean, default: Date.now },
});

export default model('Category', categorySchema, 'categories');