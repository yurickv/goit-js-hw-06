const inputEl = document.querySelector('#validation-input')


inputEl.addEventListener("blur", (event) => {
   
    if (inputEl.value.length >= inputEl.dataset.length) {
        event.currentTarget.classList.remove('invalid')
        event.currentTarget.classList.add('valid')
        return
    } 
    // event.currentTarget.classList.remove('valid')
       
    event.currentTarget.classList.add('invalid')
        
            
});
