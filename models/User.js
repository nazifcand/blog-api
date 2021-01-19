import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  surname: String,
  username: String,
  description: String,
  mail: String,
  pass: String,
  avatar: { type: String, default: '/uploads/default-avatar.jpg' },
  status: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  permission: {
    isAdmin: { type: Boolean, default: false },
    show: { type: Boolean, default: false },
    create: { type: Boolean, default: false },
    update: { type: Boolean, default: false },
    delete: { type: Boolean, default: false },
  }
});

export default model('User', userSchema, 'users');