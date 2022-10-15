const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUl = document.querySelector('#ingredients');
const appendEl = el => {
  const ingrEl = document.createElement('li');
  ingrEl.textContent = el;
  return ingrEl
}
const a = ingredients.map(appendEl);
ingredientsUl.append(...a)





