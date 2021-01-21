import Category from '../../models/Category.js';

export default async (req, res, next) => {

  /* Find all categories*/
  const categories = await Category.find({ status: true }).then(result => result).catch(err => { next({ statusCode: 500, message: 'error', errors: err }) });

  return res.send({ statusCode: 200, message: 'OK', categories });
}