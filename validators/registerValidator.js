import { body } from 'express-validator';
import User from '../models/User.js';

export default [

  /* Validation name */
  body('name')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Ad alanı 3 karakterden küçük olamaz!'),

  /* Validation surname */
  body('surname')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Soyad alanı 3 karakterden küçük olamaz!'),

  /* Validation username */
  body('username')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Kullanıcı adı alanı 3 karakterden küçük olamaz!')
    .custom(value => {
      return User.findOne({ username: value }).then(result => {
        if (result) return Promise.reject('Bu kullanıcı adı daha önceden alınmış!');
      });
    }),

  /* Validation description */
  body('description')
    .trim()
    .exists()
    .isLength({ min: 30 })
    .withMessage('Açıklama alanı 30 karakterden küçük olamaz!'),

  /* Validation mail */
  body('mail', 'E-posta alanı boş bırakılamaz!')
    .trim()
    .exists()
    .withMessage()
    .isEmail()
    .custom(value => {
      return User.findOne({ mail: value }).then(result => {
        if (result) return Promise.reject('Böyle bir e-posta kayıtlı!');
      });
    }),

  /* Validation mail */
  body('pass')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Şifre alanı 6 karakterden az olmaz!')

]