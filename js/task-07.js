
const spanEl = document.querySelector('#text');
const inputEl = document.querySelector('#font-size-control');


inputEl.addEventListener('input', changeSizeBySlider);

function changeSizeBySlider(size) {
    
    spanEl.style.fontSize = size.currentTarget.value + "px";
    console.log(size.currentTarget.value)
}