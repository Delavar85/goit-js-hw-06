function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changePlace = document.querySelector('body');
const changeBtn = changePlace.querySelector('.change-color');
const changeSpanText = changePlace.querySelector('.color');
const changeCallback = () => {
  const newColor = getRandomHexColor();
  changeSpanText.textContent = newColor;
  changePlace.style.background = newColor;
}
changeBtn.addEventListener('click',changeCallback)
