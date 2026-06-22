const output = document.getElementById('responseOutput');
const loadAdviceButton = document.getElementById('load-advice');
const loadJokeButton = document.getElementById('load-joke');
const loadItemsButton = document.getElementById('load-items');
const loadItemByIdButton = document.getElementById('load-item-by-id');

const render = (data) => {
  output.textContent = JSON.stringify(data, null, 2);
};

const request = async (path, button) => {
  button.disabled = true;
  output.textContent = 'Loading...';

  try {
    const response = await fetch(path);
    const data = await response.json();
    render(data);
  } catch (error) {
    render({ error: error.message });
  } finally {
    setTimeout(() => {
      button.disabled = false;
    }, 800);
  }
};

loadAdviceButton.addEventListener('click', () => request('/api/advice/api', loadAdviceButton));
loadJokeButton.addEventListener('click', () => request('/api/jokes/api', loadJokeButton));
loadItemsButton.addEventListener('click', () => request('/api/items', loadItemsButton));
loadItemByIdButton.addEventListener('click', () => {
  const itemId = prompt('Enter item ID:');
  if (itemId) {
    request(`/api/items/${itemId}`, loadItemByIdButton);
  }
});