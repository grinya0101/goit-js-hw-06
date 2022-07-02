function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const createBoxes = (amount) => { 
  let fragment = new DocumentFragment();
  const arrayDiv = [];// массив для хранения полученых дивов
 for (let i = 0; i < amount; i++) { // интератор будет выполнятся пока меньше значения параметра
   const widthHeightSize = 30 + i * 10 + 'px'; // на каждой интераци прибавляем 10пикселей
   const divNew = document.createElement("div"); // создаем див
     divNew.style.width = widthHeightSize; // ширина
     divNew.style.height = widthHeightSize;// высота
     divNew.style.backgroundColor = getRandomHexColor();// рандомный фон
   arrayDiv.push(divNew); // пушим наш готовый див в массив
   fragment.appendChild(divNew);
 }
boxes.appendChild(fragment);
}