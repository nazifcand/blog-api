import Category from '../../models/Category.js';

export default async (req, res, next) => {

  /* Delete category */
  const deleteCategory = await Category.findOneAndDelete({ slug: req.params.slug }).then(result => result).catch(err => next({ statusCode: 500, message: 'error', errors: err }));

  /* not deleted */
  if (!deleteCategory) return next({ statusCode: 404, message: 'Böyle bir kategori bululanadı' });

  return res.send({ statusCode: 200, message: 'OK', deleteCategory });
}