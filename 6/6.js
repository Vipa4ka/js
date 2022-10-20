const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);
function onInputBlur(e) {        
    if (input.dataset.length != e.currentTarget.value.length) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
        
    }    
}
