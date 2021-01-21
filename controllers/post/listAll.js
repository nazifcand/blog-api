import Post from '../../models/Post.js';

export default async (req, res, next) => {

  /* list all post */
  const posts = await Post.find({ status: true }).then(result => result).catch(err => next({ statusCode: 500, message: 'error', errors: err }));

  return res.send({ statusCode: 200, message: 'OK', posts });
}