import { Router } from 'express';
const router = Router();

/* Controllers */
import indexController from '../controllers/indexController.js';

/* Routes */
router.get('/', indexController);


export default router;