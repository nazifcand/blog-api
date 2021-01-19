import { Router } from 'express';
const router = Router();

/* Controllers */
import registerController from '../controllers/registerController.js';

/* Routes */
router.post('/', registerController);


export default router;