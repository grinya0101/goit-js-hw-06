
const bodyEl = document.querySelector('body');
const btnEL =  document.querySelector('.change-color');
const spanEL =  document.querySelector('.color');
console.log(spanEL)



btnEL.addEventListener('click', getStyleText);


function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function getStyleText(event) {
  bodyEl.style.backgroundColor = getRandomHexColor()
  spanEL.textContent = bodyEl.style.backgroundColor
}



