import express from 'express';
import adviceRoutes from './adviceRoutes.js';
import jokesRoutes from './jokesRoutes.js';
import { rateLimiter } from '../utils/rateLimiter.js';

const router = express.Router();

router.get('/advice/api', rateLimiter('advice', 1500), getRandomAdvice);
router.get('/jokes/api', rateLimiter('joke', 1500), getRandomJoke);
router.use(adviceRoutes);
router.use(jokesRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Random Advice & Items API' });
});

export default router;