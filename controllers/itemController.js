import { fetchRandomItem, fetchAllItems, fetchItemById} from '../services/itemService.js';

export const getRandomItem = async (req, res) => {
    const item = await fetchRandomItem();
    res.json({ item });
};

export const getAllItems = async (req, res) => {
    try {
        const items = await fetchAllItems();
        res.json({ items });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getItemById = async (req, res) => {
    try {
        const item = await fetchItemById(req.params.id);
        res.json({ item });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
