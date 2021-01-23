import Post from '../../models/Post.js';
import { unlinkSync } from 'fs';

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

  /* Delete thumbnail */
  if (deletedPost.thumbnail == ! '/uploads/default-post-thumbnail.jpg') {
    try {
      unlinkSync('public' + deletedPost.thumbnail);
    } catch (err) { }
  }

  return res.send({ statusCode: 200, message: 'OK', deletedPost });
}