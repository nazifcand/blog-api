import { Router } from 'express';
const router = Router();

/* Validator */
import loginValidator from '../validators/loginValidator.js';

/* Controllers */
import loginController from '../controllers/loginController.js';

/* Routes */
router.post('/', loginValidator, loginController);


export default router;