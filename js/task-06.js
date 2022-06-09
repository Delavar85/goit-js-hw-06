const inputElem = document.querySelector('#validation-input');
const inputLength = Number(inputElem.getAttribute('data-length'));
const checkInputLength = (event) => {
    if (event.currentTarget.value.length == inputLength) {
        inputElem.classList.remove('invalid')
       inputElem.classList.add('valid')
    } else {
        inputElem.classList.remove('valid')
        inputElem.classList.add('invalid')
   }
}
inputElem.addEventListener('blur', checkInputLength)