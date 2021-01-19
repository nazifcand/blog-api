import { Router } from 'express';
const router = Router();

/* Controllers */
import subscribeController from '../controllers/subscribeController.js';

/* Routes */
router.post('/', subscribeController);


export default router;