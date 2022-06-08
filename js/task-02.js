const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('ul')
const createElem = ingredients.map(elem => {
  const newListItem = document.createElement('li');
  newListItem.classList.add('item')
  newListItem.textContent = elem;
  return newListItem
});
list.append(...createElem)