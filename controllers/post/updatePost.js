import Post from '../../models/Post.js';
import { validationResult } from 'express-validator'
import slugify from '../../helpers/slugify.js';
import removeImage from '../../helpers/removeImage.js';

export default async (req, res, next) => {

  /* Errors */
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next({ statusCode: 401, message: 'error', errors: errors.array() });

  /* Set params */
  req.body.slug = slugify(req.body.title);
  req.body.updatedAt = Date.now();
  req.body.user = req.user._id;

  /* Check new file */
  if (req.file) {
    req.body.thumbnail = `/uploads/${req.file.filename}`;
  }

  /* Find and update */
  const updatedPost = await
    Post
      .findOneAndUpdate({ slug: req.params.slug }, { ...req.body })
      .then(result => result)
      .catch(err => next({ statusCode: 500, message: 'error', errors: err }));

  /* Not found post */
  if (!updatedPost) return next({ statusCode: 404, message: 'Böyle bir içerik bulunamadı!' });

  /* Remove old image */
  removeImage(`public${updatedPost.thumbnail}`);


  return res.send({ statusCode: 200, message: 'OK', updatedPost });
}