import {fetchRandomJoke} from '../services/jokesService.js';

export const getRandomJoke = async (req, res) => {
  const joke = await fetchRandomJoke();
  res.json({joke});
};
