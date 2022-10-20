const nameInput = document.querySelector('#name-input');
const nameOutput= document.querySelector('#name-output')
nameInput.addEventListener('input', onInput);

function onInput(e) {
    if (!e.currentTarget.value) {
        nameOutput.textContent='незнакомец'
    } else {
        nameOutput.textContent=e.currentTarget.value
    }    
}