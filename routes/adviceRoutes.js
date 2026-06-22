import express from 'express';
import { getRandomAdvice } from '../controllers/adviceController.js';
import { rateLimiter } from '../utils/rateLimiter.js';


const router=express.Router();

router.get('/advice/api',rateLimiter('advice', 9500),getRandomAdvice);

export default router;