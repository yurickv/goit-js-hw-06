function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let containerDiv = [];

const inputEl = document.querySelector('#controls');

// console.log(inputEl.children[0].value)

inputEl.children[1].addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = inputEl.children[0].value;
 
  let digit = 20;

  for (let i = 0; i < amount; i++) {
    digit += 10;
   
    const createDiv = document.createElement("div");
    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.width = `${digit}px`
    createDiv.style.height = `${digit}px`
    
    containerDiv.push(createDiv);
  }
  
  document.querySelector('#boxes').append(...containerDiv);
}

// console.log(document.querySelector('#boxes'));

inputEl.children[2].addEventListener('click', allClear);

function allClear(event) {
  inputEl.children[0].value = "";
  document.querySelector('#boxes').innerHTML = "";
}