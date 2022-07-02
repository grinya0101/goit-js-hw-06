const itemEL = document.querySelectorAll('.item')
console.log(`Number of categories : ${itemEL.length}`)

itemEL.forEach(element => {
    const h2El = element.querySelector('h2');
    const liEL = element.querySelectorAll('li');
               
    console.log(`Category: ${h2El.textContent}`); 
    console.log(`Elements: ${liEL.length }`);
    
    
});


