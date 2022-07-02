const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const liEl = document.createElement('li')
// liEl.classList.add(item)
// console.log(liEl)


const textEL = document.querySelector('#ingredients');
// const liEl = document.createElement('li');
// liEl.className = 'item';
// liEl.textContent = 'Potatoes'

ingredients.forEach(element => {
const liEl = document.createElement('li');
liEl.className = 'item';
liEl.textContent = element;
textEL.prepend(liEl);
console.log(element);
});



// const wq= liEl.innerHTML = `${ingredients}`;



