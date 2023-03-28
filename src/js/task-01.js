const ulSelector = categories.querySelectorAll(".item")

console.log('Number of categories:', ulSelector.length);

ulSelector.forEach(element => {
    
    console.log('Category:', element.querySelector('h2').textContent)
    console.log('Elements:', element.querySelectorAll('li').length)
});