import mongoose from 'mongoose';
const { Types, Schema, model } = mongoose;

const postSchema = new Schema({
  title: String,
  slug: String,
  user: Types.ObjectId,
  category: Types.ObjectId,
  tags: [String],
  description: String,
  status: { type: Boolean, default: true },
  type: { type: String, default: 'post' }, // post || page
  thumbnail: { type: String, default: '/uploads/default-post-thumbnail.jpg' },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

export default model('Post', postSchema, 'posts');