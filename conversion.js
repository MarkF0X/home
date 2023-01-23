console.log('1' + 1); // 11
console.log(22 + 'mango'); // 22mango
console.log('1' + 1 + 2); // 112
// здесь оба аргумента приводятся к строке, '1', '1';
// далее строки складываются '1' + '1';

console.log(true + true); // 2
// здесь оба аргумента приводятся к числу 1, 1;
// далее два числа складываются 1+1;

const a = 15;
const b = '10';
console.log('Автоматическое приведение a + b = ' + a + b); // 1510
console.log('Явное приведение a + b = ' + (Number(a)+Number(b))); // 25

const aa = 10;
const bb = '1a';
console.log('Автоматическое приведение aa + bb = ' + aa + bb); // 101a
console.log('Явное приведение aa + bb = ' + (Number(aa) + Number(bb))); // NaN

String(123); // Явное приведение для любых типов
Number('3');
Boolean(1);

let pop = Number(aa)+Number(bb);
console.log(Boolean('abc') + ' ' + Boolean(pop)); // true false

Number(undefined); // NaN
Number(null); // 0
Number(true); // 1
Number('string'); // NaN
Number('123'); // 123

let und;
const nm = 50;
const bl = true;
const str = 'word';
console.log(typeof und) // "undefined"
console.log(typeof nm); // number
console.log(typeof bl); // Boolean
console.log(typeof str); // String

let x = 1;
x = -x;
console.log(x); // -1 унарный минус (применяется к одному операнду/аргументу)
console.log(typeof x); // Number
let age = '12';
console.log(+age); // 12 (унарный плюс может заменить Number())
age = +age;
console.log(typeof age); // Number

// Основные математические операторы
console.log( 2 + 1 ); // 3
console.log( 2 - 1 ); // 1
console.log( 4 / 2 ); // 2
console.log( 2 * 2 ); // 4

// Остаток от деления
console.log( 5 % 2 ); // 1, остаток от деления 5 на 2
console.log( 8 % 3 ); // 2, остаток от деления 8 на 3
console.log( 8 % 4 ); // 0, остаток от деления 8 на 4

// Возведение в степень
console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16

// Инкремент и декремент
let counter1 = 2;
counter1++; // работает как counter1 = counter1 + 1, просто запись короче
console.log( counter1 ); // 3
let counter2 = 2;
counter2--; // работает как counter2 = counter2 - 1, просто запись короче
console.log( counter2 ); // 1
// Инкремент/декремент можно применить только к переменной. Попытка использовать его на значении, типа 5++, приведёт к ошибке.

console.log(nm + bl); // автоматическое приведение типов. Сложил число с булеаном = 51
console.log(str + bl); // строка + булеан = wordtrue
console.log(und + bl); // андефайнд + булеан = NaN (число)
console.log(typeof (und + bl)); // число
console.log(und +1);
console.log("Git TEST");