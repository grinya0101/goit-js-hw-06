function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const createBoxes = (amount) => { 
  let fragment = new DocumentFragment();
  const arrayDiv = [];
 for (let i = 0; i < amount; i++) { 
   const widthHeightSize = 30 + i * 10 + 'px'; 
   const divNew = document.createElement("div"); 
     divNew.style.width = widthHeightSize; 
     divNew.style.height = widthHeightSize;
     divNew.style.backgroundColor = getRandomHexColor();
   arrayDiv.push(divNew); 
   fragment.appendChild(divNew);
 }
boxes.appendChild(fragment);
}