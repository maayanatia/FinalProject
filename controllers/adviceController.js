import { fetchRandomAdvice } from '../services/adviceService.js';

export const getRandomAdvice = async (req, res) => {
  const advice = await fetchRandomAdvice();
  res.json({advice});
};
