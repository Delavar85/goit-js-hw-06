let counterValue = 0;
const spanValue = document.querySelector('#value');
const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');
const addVelue = () => {
    counterValue += 1;
    spanValue.textContent=counterValue
};
const removeValue = () => {
    counterValue -= 1;
    spanValue.textContent=counterValue
};
addBtn.addEventListener('click', addVelue);
removeBtn.addEventListener('click', removeValue);