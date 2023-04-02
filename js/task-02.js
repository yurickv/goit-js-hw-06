const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let itemList = [];

for (let i = 0; i < ingredients.length; i++) {
  
  const arreyHtml = document.createElement('li')
  arreyHtml.textContent = ingredients[i];
  arreyHtml.classList.add('item');
  itemList.push(arreyHtml);
}

document.querySelector('ul').append(...itemList)

console.log(document.querySelector('ul'))