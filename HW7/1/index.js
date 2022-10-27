
const titleEl = document.querySelectorAll('h2');
const itemEl = document.querySelectorAll('.item');

const list = [];
titleEl.forEach(e => {
    list.push(e)    
});
console.log(`В списке ${list.length} категории.`);


itemEl.forEach(e => {   
    const categories = e.querySelector('h2');
    const el = e.querySelectorAll('li');
    console.log(`Категория: ${categories.textContent}`);
    console.log(`Количество элементов: ${el.length}`);      
});








