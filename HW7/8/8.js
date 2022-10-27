const boxes = document.querySelector('#boxes');
const amountEl = document.querySelector('[data-action="render"]')
const clearBtn=document.querySelector('[data-action="destroy"]')
const numberEl = document.querySelector('input')
amountEl.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', onClear);

//создание дивов
function createBoxes() {  
    let list = [];
    const amountDiv = Number(numberEl.value); 
    for (let i = 0; i < amountDiv; i++){
        const divEl = document.createElement('div');
        divEl.classList.add('container');
         divEl.style.width = 30+i*10 + 'px';
        divEl.style.height = 30 + i * 10 + 'px';
        divEl.style.margin=10+'px'
        divEl.style.background = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();       
        list.push(divEl);         
    };   
    
    boxes.append(...list);    
}; 
//очистка 
function onClear() {
    numberEl.value = '';  
    boxes.innerHTML = '';
}