const inputElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');
textElement.style.fontSize = `${inputElement.value}px`
const callbackInput = (elem) => {
    textElement.style.fontSize=`${elem.currentTarget.value}px`
};
inputElement.addEventListener('input', callbackInput)