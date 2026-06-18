import express from 'express';
import { getRandomAdvice } from '../controllers/adviceController.js';

const router = express.Router();

router.get('/advice/api', getRandomAdvice);
router.get('/advice/api', rateLimiter('advice', 1500), getRandomAdvice);

export default router;