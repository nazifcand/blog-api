import Category from '../models/Category.js';
import { body } from 'express-validator';

export default [

  /* Validate name */
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Kategori başlığı boş bırakılamaz')
    .isLength({ min: 2 })
    .withMessage('Kategori başlığı en az 2 karakter olmalıdır')
    .custom(value => {
      return Category.findOne({ title: value }).then(result => {
        if (result) return Promise.reject('Böyle bir kategori zaten bulunuyor!');
      })
    }),

  body('description')
    .trim(),

  body('status')
    .trim()
    .customSanitizer(value => {
      if (value === true || value === 'true') return true;
      return false;
    })

]