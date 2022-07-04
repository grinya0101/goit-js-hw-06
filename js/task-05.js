const inputEl = document.querySelector('#name-input');
const spanEL = document.querySelector('#name-output');


inputEl.addEventListener('input', onIventinput)

function onIventinput (event) {
    if(event.currentTarget.value === ""){
    spanEL.textContent = "Anonimus";
    
    } else {
        spanEL.textContent = event.currentTarget.value;
    }
    
}