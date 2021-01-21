import Post from '../../models/Post.js';

export default async (req, res, next) => {

  /* Find post */
  const post =
    await Post
      .findOne({
        slug: req.params.slug,
        status: true,
        type: 'post'
      })
      .then(result => result)
      .catch(err => next({ statusCode: 500, message: 'OK', errors: err }));

  /* Not found post */
  if (!post) return next({ statusCode: 404, message: 'Böyle bir içerik bulunamadı!' });

  return res.send({ statusCode: 200, message: 'OK', post });
}