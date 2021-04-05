const checkInput = document.querySelector('input');
console.log(checkInput);
const btns = document.querySelectorAll('button');
console.log(btns);
const boxesCont = document.querySelector('#boxes');
console.log(boxesCont)



const createBoxes = amount => {
    const boxesArr = [];
    let dimension = 30;

    for (let index = 1; index <= amount; index+=1) {
        const box = document.createElement('div');
        
        const red = Math.floor(Math.random() * 250);
        const green = Math.floor(Math.random() * 250);
        const blue = Math.floor(Math.random() * 250);
        const color = `rgb(${red}, ${green}, ${blue})`;

        box.style.width = `${dimension}px`;
        box.style.height = `${dimension}px`;
        box.style.backgroundColor = color;
        box.style.position = 'relative'
        box.style.left = `${Math.floor(Math.random() * 75)}%`;
        box.style.top = `${Math.floor(Math.random() * 100)}%`;

        boxesArr.push(box);

        dimension += 10;
    }

    boxesCont.append(...boxesArr)
    
}
btns.forEach(function (btn) {
     btn.addEventListener('click', function (e) {
        if (btn.dataset.action === 'render') {
            createBoxes(checkInput.value);
            console.log(checkInput.value)
        }
        else if (btn.dataset.action === 'destroy') {
             boxesCont.innerHTML = '';
         }
         
     
    });
    
})
   

