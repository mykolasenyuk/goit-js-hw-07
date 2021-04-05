const checkInput = document.querySelector('input');
console.log(checkInput);
const btns = document.querySelectorAll('button');
console.log(btns);
const boxes = document.querySelector('#boxes')
console.log(boxes)
checkInput.addEventListener("input",createBoxes)
function createBoxes(amount) {
    // console.log(amount.currentTarget.value)
    const num = Number(amount.currentTarget.value);
    
    console.log(num)
   
}
const box = `<div></div>`;

   console.log(box)