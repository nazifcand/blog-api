import Post from '../../models/Post.js';

export default async (req, res, next) => {

  /* Find and delete */
  const deletedPost =
    await Post
      .findOneAndRemove({
        slug: req.params.slug,
        type: 'post'
      })
      .then(result => result)
      .catch(err => next({ statusCode: 500, message: 'error', errors: err }));

  /* Not found post */
  if (!deletedPost) return next({ statusCode: 404, message: 'Böyle bir içerik bulunamadı!' });

  return res.send({ statusCode: 200, message: 'OK', deletedPost });
}