const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', function() {
    const input = this.value;
   
    if(input.length <= 6){
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    }else{
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
});