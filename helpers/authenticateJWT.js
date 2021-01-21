import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import mongoose from 'mongoose';
const { Types } = mongoose;

export default (req, res, next) => {

  const token = req.headers.authorization;

  /* Not found token */
  if (!token) return next({ statusCode: 401, message: 'Yetkisiz istek' });

  /* Verify token */
  jwt.verify(token, 'SECRETKEY', async (err, decode) => {
    if (err) return next({ statusCode: 401, message: 'Geçersiz token' });

    /* Find user */
    const user = await User.findOne({ _id: Types.ObjectId(decode.id) }).then(result => result).catch(err => next({ statusCode: 500, message: 'error', errors: err }));

    /* Not found user */
    if (!user) return next({ statusCode: 401, message: 'Geçersiz token' });

    req.user = user;
    next();
  });
}