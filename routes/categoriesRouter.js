import { Router } from 'express';
import authenticateJWT from '../helpers/authenticateJWT.js';
import authenticatePermission from '../helpers/authenticatePermission.js';
const router = Router();

/* Validators */
import categoryValidator from '../validators/categoryValidator.js';

/* Controllers */
import categoryController from '../controllers/categoryController.js';

/* Routes */

/* List all categories */
router.get(
  '/',
  categoryController.listAll
);

/* Get a category */
router.get(
  '/:slug',
  categoryController.getCategory
);

/* Create a new category */
router.post(
  '/',
  authenticateJWT,
  authenticatePermission.checkCreate,
  categoryValidator,
  categoryController.createCategory
);

/* update category */
router.put(
  '/:slug',
  authenticateJWT,
  authenticatePermission.checkUpdate,
  categoryValidator,
  categoryController.updateCategory
);

/* Delete a category */
router.delete(
  '/:slug',
  authenticateJWT,
  authenticatePermission.checkDelete,
  categoryController.deleteCategory
);

export default router;