import { Router } from 'express';
const router = Router();

/* Controllers */
import categoryController from '../controllers/categories/index.js';

/* Routes */

/* List all categories */
router.get('/', categoryController.listAll);
/* Get a category */
router.get('/:slug', categoryController.getCategory);
/* Create a new category */
router.post('/', categoryController.createCategory);
/* update category */
router.put('/:slug', categoryController.updateCategory);
/* Delete a category */
router.delete('/:slug', categoryController.deleteCategory);

export default router;