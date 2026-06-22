import { getRandom, getAll, getById} from '../dal/items.js';

export const fetchRandomItem = async () => {
    // Call the DAL function directly
    const item = await getRandom();
    
    if (!item) {
        throw new Error('No items available');
    } 
    
    return item;
};

export const fetchAllItems = async () => {
    const items = await getAll();
    
    if (!items || items.length === 0) {
        throw new Error('No items available');
    } 
    
    return items;
};

export const fetchItemById = async (id) => {
    const item = await getById(id);
    
    if (!item) {
        throw new Error('Item not found');
    }
    
    return item;
};