let counterValue = 0;



const increment = document.querySelector('[data-action="increment"]');    
const decrement = document.querySelector('[data-action="decrement"]');
const value =document.querySelector('#value')
increment.addEventListener('click', OnIncrement);
decrement.addEventListener('click', OnDecrement);



function OnIncrement(e) {
    counterValue += 1    
    value.innerText = counterValue;
    }
function OnDecrement(e) {
    counterValue -= 1
    value.innerText = counterValue;
}