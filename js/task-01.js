
const allItems = document.querySelectorAll('.item');
console.log(`В списке ${allItems.length} категории.`);


const listItem = document.querySelector('.item')

console.log('Категория:', listItem.firstElementChild.textContent);
console.log(`Количество элементов: ${listItem.lastElementChild.children.length}`);


console.log('Категория:', listItem.nextElementSibling.firstElementChild.textContent);
console.log(`Количество элементов: ${listItem.nextElementSibling.lastElementChild.children.length}`);

console.log('Категория:', listItem.nextElementSibling.nextElementSibling.firstElementChild.textContent);
console.log(`Количество элементов: ${listItem.nextElementSibling.nextElementSibling
    .lastElementChild.children.length}`);







