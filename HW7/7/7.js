const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.addEventListener('input', onChange);


function onChange(e) {    
    span.style.fontSize = `${input.value}px`; 
}