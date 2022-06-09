const inputValue = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output')
inputValue.addEventListener('input', (event) => {
    if (event.currentTarget.value === "") {
        outputText.textContent = 'Anonymous';
        return
    }
  outputText.textContent = event.currentTarget.value;
})