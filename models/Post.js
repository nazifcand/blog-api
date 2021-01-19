import mongoose from 'mongoose';
const { Types, Schema, model } = mongoose;

const postSchema = new Schema({
  title: String,
  slug: String,
  user: Types.ObjectId,
  category: Types.ObjectId,
  tags: [String],
  description: String,
  type: { type: String, default: 'post' }, // post || page
  thumbnail: { type: String, default: '/uploads/post-default-thumbnail.jpg' },
  createAt: { type: Boolean, default: Date.now },
  updateAt: { type: Boolean, default: Date.now },
});

export default model('Post', postSchema, 'posts');