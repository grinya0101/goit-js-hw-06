const inputEl = document.querySelector('#name-input');
const spanEL = document.querySelector('#name-output');


inputEl.addEventListener('input', onIventinput)

function onIventinput (event) {
    
    spanEL.textContent = event.currentTarget.value;
}