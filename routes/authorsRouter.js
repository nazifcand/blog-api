import { Router } from 'express';
const router = Router();

/* Controllers */
import authorController from '../controllers/authorController.js';

/* Routes */

/* List all authors */
router.get('/', authorController.listAll);
/* Get a author */
router.get('/:slug', authorController.getAuthor);
/* Create a new author */
router.post('/', authorController.createAuthor);
/* update author */
router.put('/:slug', authorController.updateAuthor);
/* Delete a author */
router.delete('/:slug', authorController.deleteAuthor);

export default router;