import { validationResult } from 'express-validator';
import slugify from '../../helpers/slugify.js';
import Category from '../../models/Category.js';

export default async (req, res, next) => {

  /* Errors */
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next({ statusCode: 401, message: 'error', errors: errors.array() });

  /* Set params */
  req.body.slug = slugify(req.body.title);

  /* Find and update */
  const updatedCategory = await Category.findOneAndUpdate({ slug: req.params.slug }, req.body).then(result => result).catch(err => next({ statusCode: 500, message: 'error', errors: err }));

  /* Not found category */
  if (!updatedCategory) return next({ statusCode: 404, message: 'Güncellenecek kategori bulunamadı!' });

  return res.send({ statusCode: 200, message: 'OK', updatedCategory });

}