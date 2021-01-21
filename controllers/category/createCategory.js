import Category from '../../models/Category.js';
import slugify from '../../helpers/slugify.js';
import { validationResult } from 'express-validator';

export default async (req, res, next) => {

  /* Check errors */
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next({ statusCode: 401, message: 'error', errors: errors.array() });

  /* Set params */
  req.body.slug = slugify(req.body.title);

  /* Create category */
  const createdCategory = await Category.create(req.body).then(result => result).catch(err => next({ statusCode: 500, message: 'error', errors: err }));

  return res.send({ statusCode: 200, message: 'OK', createdCategory });
}