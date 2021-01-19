import { Router } from 'express';
const router = Router();

/* Controllers */
import pageController from '../controllers/pages/index.js';

/* Routes */

/* List all pages */
router.get('/', pageController.listAll);
/* Get a page */
router.get('/:slug', pageController.getPage);
/* Create a new page */
router.post('/', pageController.createPage);
/* update page */
router.put('/:slug', pageController.updatePage);
/* Delete a page */
router.delete('/:slug', pageController.deletePage);

export default router;