const counterValue  = {
    value: 0,
    increment(){
        this.value += 1;
    },

    dacrement(){
        this.value -= 1;
    }
};

const dacrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

dacrementBtn.addEventListener('click',function () {
    counterValue.dacrement();
    valueEl.textContent = counterValue.value
} );

incrementBtn.addEventListener('click', function (){
    counterValue.increment();
    valueEl.textContent = counterValue.value
});


