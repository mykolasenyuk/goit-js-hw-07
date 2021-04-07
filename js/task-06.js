const checkInput = document.querySelector('#validation-input');
console.log(checkInput);

checkInput.addEventListener('blur', onInput);
function onInput(event) {
  checkInput.classList.add("valid", 'invalid')

  console.log(event.currentTarget.value.length)

  if (event.currentTarget.value.length == checkInput.dataset.length) {
    checkInput.classList.toggle('invalid')
  }
}
console.log(checkInput.dataset.length)


// Второй Вариант

//     const inputEl = document.querySelector("input#validation-input");
// //const inputEl = document.querySelector("input");
// inputEl.addEventListener("blur", onInputChange);
// console.log(inputEl);
// inputEl.style.border = ' 3px solid #BDBDBD'
// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   if (event.currentTarget.value.length === 6) {
//       inputEl.style.borderColor = ' #4CAF50';
//   } else inputEl.style.borderColor = '#F44336';
  
// }


