const listItem = document.querySelector('.item')
// console.log(listItem);

const title = listItem.firstElementChild;
console.log('Категория:',title.textContent)
console.log('Количество элементов:',listItem.lastElementChild.children.length);
// console.log(listItem.children)

console.log('Категория:', listItem.nextElementSibling.firstElementChild.textContent);
console.log('Количество элементов:', listItem.nextElementSibling.lastElementChild.children.length);

console.log('Категория:', listItem.nextElementSibling.nextElementSibling.firstElementChild.textContent);
console.log('Количество элементов:', listItem.nextElementSibling.nextElementSibling.lastElementChild.children.length);