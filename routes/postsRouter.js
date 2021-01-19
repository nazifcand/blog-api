import { Router } from 'express';
const router = Router();

/* Controllers */
import postController from '../controllers/postController.js';
import commentController from '../controllers/commentController.js';

/* Routes */

/* List all posts */
router.get('/', postController.listAll);
/* Get a post */
router.get('/:slug', postController.getPost);
/* Create a new post */
router.post('/', postController.createPost);
/* update post */
router.put('/:slug', postController.updatePost);
/* Delete a post */
router.delete('/:slug', postController.deletePost);


/* List all comments */
router.get('/:slug/comments', commentController.listAll);
/* Get a comment */
router.get('/:slug/comments/:id', commentController.getComment);
/* Create a new comment */
router.post('/:slug/comments', commentController.createComment);
/* update comment */
router.put('/:slug/comments/:id', commentController.updateComment);
/* Delete a comment */
router.delete('/:slug/comments/:id', commentController.deleteComment);

export default router;