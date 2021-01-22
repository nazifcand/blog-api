import Post from '../../models/Post.js';
import slugify from '../../helpers/slugify.js';
import { validationResult } from 'express-validator';
import { unlinkSync } from 'fs';

export default async (req, res, next) => {

  /* Errors */
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    try {
      /* Delete image */
      unlinkSync(req.file.path);
    } catch (err) { }

    return next({ statusCode: 401, message: 'error', errors: errors.array() })
  }

  /* Set params */
  req.body.slug = slugify(req.body.title);
  req.body.user = req.user._id;
  req.body.type = 'post';

  /* is file */
  if (req.file) {
    req.body.thumbnail = `/uploads/${req.file.filename}`;
  }

  /* Create post */
  const createdPost = await Post.create(req.body).then(result => result).catch(err => next({ statusCode: 500, message: 'error', errors: err }));

  return res.send({ statusCode: 200, message: 'OK', createdPost });
}