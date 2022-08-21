import express from 'express';
import { users, signin } from '../controllers/userController.js';

const router = express.Router();

router.get('/', users);

router.post('/', signin);

export default router;
