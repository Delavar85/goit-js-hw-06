const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('ul')
const createElem = [];
for (let i = 0; i < ingredients.length; i += 1){
  const newListItem = document.createElement('li');
  newListItem.classList.add('item')
  newListItem.textContent = ingredients[i];
  createElem.push(newListItem)
}
list.append(...createElem)