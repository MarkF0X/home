
function calc () {
    let fA = Number(document.getElementById('firstArgument').value);
    let sA = Number(document.getElementById('secondArgument').value);
    let operation = document.getElementById('mathOp').value;
    let res = 0;
    switch (operation) {
        case 'add':
            res = fA + sA;
            break;
        case 'multi':
            res = fA * sA;
            break;
        case 'sub':
            res = fA - sA;
            break;
        case 'div':
            res = fA / sA;
            break;
        default:
            alert('Chose operation!')
    }
    document.getElementById('result').textContent = res.toFixed(4);

    const newli = document.createElement('li');
    newli.textContent = res.toFixed(4);
    const target = document.getElementById('history');
    target.insertAdjacentElement('afterbegin', newli);
}

function deleteResult(event) {
    parent.removeChild(event.target);
}

let button = document.getElementById('resButton');
button.addEventListener('click', calc);

const parent = document.getElementById('history');
parent.addEventListener('click', deleteResult);