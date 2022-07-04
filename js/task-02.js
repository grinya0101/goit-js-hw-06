const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];





const textEL = document.querySelector('#ingredients');


const addli = ingredients.map(element => {
const liEl = document.createElement('li');
liEl.className = 'item';
liEl.textContent = element;
return liEl;


});


textEL.append(...addli);





