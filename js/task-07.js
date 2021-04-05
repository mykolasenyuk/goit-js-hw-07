

const controler = document.getElementById('font-size-control');
console.log(controler);
const span = document.getElementById('text');
console.log(span);

controler.addEventListener('input',function onChange(e) {
    span.style.fontSize = e.currentTarget.value + 'px';

    console.log(span.style.fontSize);
})
