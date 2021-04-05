const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemList = document.querySelector('ul');

const ingredient = ingredients.map(el => {
    const itemLi = document.createElement('li');
    itemLi.textContent = el
    
    return itemLi;
});

console.log(ingredient);

itemList.append(...ingredient);




