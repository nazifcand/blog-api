import mongoose from 'mongoose';
const { Types, Schema, model } = mongoose;

const commentSchema = new Schema({
  text: String,
  user: Types.ObjectId,
  status: { type: Boolean, default: false },
  createAt: { type: Boolean, default: Date.now },
  updateAt: { type: Boolean, default: Date.now },
});

export default model('Comment', commentSchema, 'comments');