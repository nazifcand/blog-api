import User from '../../models/User.js';

export default async (req, res, next) => {

  const users = await User.find({}, { permission: 0 }).then(result => result).catch(err => next({ statusCode: 500, message: 'error', errors: err }));

  return res.send({ statusCode: 200, message: 'OK', users });

}