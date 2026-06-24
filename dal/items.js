export const items = [
  { id:1,name:'Apple',description:'A juicy red apple'},
  { id:2,name:'Banana',description:'A ripe yellow banana'},
  { id:3,name:'Carrot',description:'A crunchy orange carrot'}
];

export const getAll = async () => {
  return items;
};


export const getRandom = async () => {
  const allItems=await getAll();
  const randomIndex=Math.floor(Math.random() * allItems.length);
  return allItems[randomIndex];
};

export const getById = async (id) => {
    for (const item of items) {
        if (item.id === Number(id)) {
            return item;
        }
    }
    return null;
};