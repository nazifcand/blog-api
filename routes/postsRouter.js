import authenticateJWT from '../helpers/authenticateJWT.js';
import authenticatePermission from '../helpers/authenticatePermission.js';
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
router.post('/', authenticateJWT, authenticatePermission.checkCreate, postController.createPost);
/* update post */
router.put('/:slug', authenticateJWT, authenticatePermission.checkUpdate, postController.updatePost);
/* Delete a post */
router.delete('/:slug', authenticateJWT, authenticatePermission.checkDelete, postController.deletePost);


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