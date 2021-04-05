

const refs = {
    input: document.querySelector('#name-input'),
    label: document.querySelector('h1 > #name-output'),
};

refs.input.addEventListener('input', onInput);
const span  = refs.label.textContent
function onInput(event) {
    refs.label.textContent = event.currentTarget.value;

    if (event.currentTarget.value ==='') {
     refs.label.textContent = span
 }
};

