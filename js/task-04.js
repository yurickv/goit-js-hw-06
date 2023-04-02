const buttonDekrementEl = document.querySelector('[data-action*="decrement"]');

const buttonIncrementEl = document.querySelector('[data-action*="increment"]');
// console.log(buttonIncrementEl)

const valueEl = document.querySelector('#value'); 

let numb = 0;
buttonDekrementEl.addEventListener('click', () => {
//    valueEl.textContent -= 1
    numb -= 1;
    // console.log (numb)
    valueEl.textContent = numb;
    
})


buttonIncrementEl.addEventListener('click', () => {
    numb += 1;
    // console.log (numb)
    valueEl.textContent = numb;
})

