const listCategories = document.querySelector('#categories');
const listItems = listCategories.children
console.log(`Number of ${listCategories.id}:`, listItems.length)
for (let i = 0; i < listItems.length; i += 1){
    // console.log(listItems[i]);
    console.log('Category:', listItems[i].querySelector('h2').textContent)
    console.log('Elements:', listItems[i].querySelectorAll('li').length)
}