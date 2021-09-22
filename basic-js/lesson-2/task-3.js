// task 3
"use strict"

let num1 = parseInt(prompt("Введите первое число: "));
let num2 = parseInt(prompt("Введите второе число: "));
let result = null;

if (num1 >= 0 && num2 >= 0) {
    result = num1 - num2;
} else if (num1 <= 0 && num2 <= 0) {
    result = num1 * num2;
} else {
    result = num1 + num2;
};

alert(`Ваш результат: ${result}`);