import express from 'express';
import adviceRoutes from './adviceRoutes.js';
import jokesRoutes from './jokesRoutes.js';
import itemRoutes from './itemRoutes.js';
const router = express.Router();

router.use(adviceRoutes);
router.use(jokesRoutes);
router.use(itemRoutes);

router.get('/', (req, res) => {
  res.json({message:'Welcome to the Random Advice, Jokes & Items API'});
});

export default router;