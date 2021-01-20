import User from '../models/User.js';
import hash from '../helpers/hash.js';
import { validationResult } from 'express-validator';

export default async (req, res, next) => {

  /* Check errors */
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next({ statusCode: 401, errors: errors.array() });

  /* Hash password */
  req.body.pass = hash(req.body.pass);

  /* Create user */
  const createdUser = await User.create(req.body).then(result => result).catch(err => next({ statusCode: 500, message: err }));

  return res.send({ statusCode: 200, message: 'OK', user: createdUser });

}