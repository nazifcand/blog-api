import User from '../models/User.js';
import { body } from 'express-validator';

export default [

  /* Validation name */
  body('mail')
    .trim()
    .isEmail()
    .withMessage('Lütfen geçerli bir mail adresi giriniz!')
    .custom(value => {
      return User.findOne({ mail: value }).then(result => {
        if (!result) return Promise.reject('E-posta bulunamadı!');
      })
    }),

  /* Validation mail */
  body('pass')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Şifre alanı 6 karakterden az olmaz!')

]