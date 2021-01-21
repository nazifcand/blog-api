import Category from '../../models/Category.js';

export default async (req, res, next) => {

  /* Find category */
  const category = await Category.findOne({ slug: req.params.slug }).then(result => result).catch(err => next({ statusCode: 500, message: 'error', errors: err }));

  /* Not found category */
  if (!category) return next({ statusCode: 404, message: 'Kategori bulunamadı!' });

  return res.send({ statusCode: 200, message: 'OK', category });
}