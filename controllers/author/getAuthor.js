import User from '../../models/User.js';

export default async (req, res, next) => {

  /* Get a user */
  const user = await User.findOne({ slug: req.params.slug }, { permission: 0 }).then(result => result).catch(err => next({ statusCode: 500, message: 'error', errors: err }));

  /* User not found */
  if (!user) return next({ statusCode: 404, message: 'Böyle bir yazar bulunamadı!' });

  return res.send({ statusCode: 200, message: 'OK', user });

}