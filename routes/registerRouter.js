import { Router } from 'express';
const router = Router();

/* Validator */
import registerValidator from '../validators/registerValidator.js';

/* Controllers */
import registerController from '../controllers/registerController.js';

/* Routes */
router.post('/', registerValidator, registerController);

export default router;