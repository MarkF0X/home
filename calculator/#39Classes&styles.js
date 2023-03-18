import {randfive} from "./RandomFuncForCalc.js";

function changeColor() {
    const elem = document.getElementById('color');
    const newBackgroundColor = elem.getAttribute('data-color');
    document.body.style.backgroundColor = newBackgroundColor;
}

function ebatColor() {
    console.log('govna poesh')
    if (Math.floor(Math.random() * 100) % 10 === 0) {
        document.getElementById('epileps').textContent = 'Наверни говнеца!';
    }
    let randColor = randfive();
    document.body.style.transition = '0.2s';
    
    switch (randColor){
        case 0:
            document.body.style.backgroundColor = 'red';
            break;
        case 1:
            document.body.style.backgroundColor = 'green';
            break;
        case 2:
            document.body.style.backgroundColor = 'blue';
            break;
        case 3:
            document.body.style.backgroundColor = 'yellow';
            break;
        case 4:
            document.body.style.backgroundColor = 'cyan';
            break;
    }
}

let countEpileps = 0;
let timer2;
let shitCount = 0;

function startEpileps() {
    console.log(123)
    timer2 = setInterval(() => ebatColor(), 200)
    countEpileps = 1;
    document.getElementById('epileps').textContent = 'Остановить дискотеку';
    shitCount++;
}

function stopEpileps() {
    clearInterval(timer2);
    console.log('timer stop');
    countEpileps = 0;
    document.getElementById('epileps').textContent = 'Начать дискотеку';
    shitCount++;
    surprise();
}

function checkCountEpileps() {
    switch (countEpileps) {
        case 0:
            startEpileps();
            return;
        case 1:
            stopEpileps();
            return;
    }
}

function surprise() {
    if (shitCount % 10 === 0) {
        document.getElementById('epileps').textContent = 'Наверни говнеца!';
    }
}


let lupa = document.getElementById('epileps')
lupa.addEventListener('click', checkCountEpileps);
let buttonChangeColor = document.getElementById('color');
buttonChangeColor.addEventListener('click', changeColor);

