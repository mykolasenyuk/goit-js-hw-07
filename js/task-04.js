const value = document.querySelector('#value')
console.log(value.textContent);
const btns = document.querySelectorAll("button")
console.log(btns);

let counterValue = 0;
btns.forEach(function (btn) {

    console.log(btn.dataset.action)

    btn.addEventListener('click', function (e) {
        if (btn.dataset.action === 'decrement') {
            counterValue -= 1
        }
        else if (btn.dataset.action === 'increment') {
            counterValue += 1
        }
        value.textContent = counterValue
        
        console.log(value.textContent)
    });
});


// Второй вариант


// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueEl = document.querySelector("#value");
// console.log(valueEl);
// let counterValue = 0;

// incrementBtn.addEventListener("click", function decrement (e) {
//     counterValue += 1;
//     valueEl.textContent = counterValue
// });
// decrementBtn.addEventListener("click", function increment (e) {
    
//     counterValue -= 1;
//     valueEl.textContent = counterValue
// });






