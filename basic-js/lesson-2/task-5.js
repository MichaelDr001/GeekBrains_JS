// task 5,6
"use strict"

let valueOne = parseInt(prompt('Введите первое число: '));
let valueTwo = parseInt(prompt('Введите второе число: '));
let userChocie = String(prompt('Впишите необходимую операцию. \nНапример: умножить, поделить, прибавить, вычесть'));

function mathOperation (num1, num2, operationName) {
    switch (operationName) {
        case 'умножить':
            return num1 * num2;
        case 'поделить':
            return num1 / num2;
        case 'прибавить':
            return num1 + num2;
        case 'вычесть':
            return num1 - num2;
        default:
            return 'Выбрана неверная операция'; 
    };
};

let mathResult = mathOperation (valueOne, valueTwo, userChocie);
alert (mathResult);