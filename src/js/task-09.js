function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color')
const spanEl = document.querySelector('.color')
const divEl =  document.querySelector('.widget')


buttonEl.addEventListener('click', changeColor);

function changeColor() {
  const RundomeColor = getRandomHexColor();
  
  divEl.style.backgroundColor = RundomeColor;

  spanEl.textContent = RundomeColor;

  // console.log(RundomeColor);
}