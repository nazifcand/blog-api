import { body } from 'express-validator';
import mongoose from 'mongoose';
import Post from '../models/Post.js';

export default [

  /* Validate title */
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Başlık boş olamaz!')
    .isLength({ min: 3 })
    .withMessage('Başlık en az 3 karakter olmalıdır')
    .custom(value => {
      return Post.findOne({ title: value }).then(result => {
        if (result) return Promise.reject('Böyle bir içerik kayıtlı');
      })
    }),

  /* Validate category */
  body('category')
    .trim()
    .customSanitizer(value => {
      if (!value) return null;
      try {
        return mongoose.Types.ObjectId(value);
      } catch (error) {
        return null
      }
    }),

  /* Validate tags */
  body('tags')
    .trim()
    .customSanitizer(value => {
      if (!value) return [];
      return value.split(',').filter(result => {
        result = result.trim();
        if (result) return result;
      });
    }),

  body('description')
    .trim()

]