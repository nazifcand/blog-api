import { Router } from 'express';
const router = Router();

/* Controllers */
import loginController from '../controllers/loginController.js';

/* Routes */
router.post('/', loginController);


export default router;