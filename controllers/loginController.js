import { validationResult } from 'express-validator';
import hash from '../helpers/hash.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export default async (req, res, next) => {

  /* Check errors */
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next({ statusCode: 401, message: 'error', errors: errors.array() });

  /* Hash pass */
  req.body.pass = hash(req.body.pass);

  /* Check user */
  const user = await User.findOne(req.body).then(result => result).catch(err => next({ statusCode: 500, message: 'error', errors: err }));

  /* User not found */
  if (!user) return next({ statusCode: 404, message: 'Kullanıcı bulunamadı!' });

  /* Generate token */
  const token = jwt.sign({ id: user._id }, 'SECRETKET', { expiresIn: "2h" });

  return res.send({ statusCode: 200, message: 'OK', token });
}