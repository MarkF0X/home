function showVerticalMessage(str) {
    str = str[0].toUpperCase() + str.slice(1,7);
    for (let char of str) { //  цикл вертикального представления строки
        console.log(char);
    }
}

showVerticalMessage('strada');