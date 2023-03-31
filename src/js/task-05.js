const inpuEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');

inpuEl.addEventListener("input", event => {
    outputEl.textContent = event.currentTarget.value    
})


