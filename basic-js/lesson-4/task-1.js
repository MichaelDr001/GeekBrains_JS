// task 1

// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: 
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и 
// вернуть пустой объект.


'use strict';

/* Задаём через переменные префиксы к цифрам */
const prefixHundred = 'Сотни: ';
const prefixTen = 'Десятки: ';
const prefixUnit = 'Единицы: ';

/* Вводимое число переводим в массив из данных чисел */
let enteredNumber = String(prompt('Введите трёхзначное число от 0 до 999: '));
let NumberArr = Array.from(enteredNumber);

class Figure {
    /**
     * Создаёт объект вводимого числа
     * @param {number} num1 - принимает первое число массива (сотая часть)
     * @param {number} num2 - принимает второе число массива (десятичная часть)
     * @param {number} num3 - принимает третье число массива (единичная часть)
     */
    constructor (num1, num2, num3){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    };

    /**
     * Добавляет префиксы к введённым числам
     * 
     * @return {object} Готовый объект с префиксами
     */
    get transform (){
        return 'Результат = ' + prefixHundred + this.num1 + ', ' + prefixTen + this.num2 + ', ' + prefixUnit + this.num3;
    };
};

/* Проверка длинны введённого числа */
if (enteredNumber.length == 3){
    let readyNumber = new Figure (NumberArr[0], NumberArr[1], NumberArr[2]);
    alert (readyNumber.transform);
}else if (enteredNumber.length == 2){
    let readyNumber = new Figure (0, NumberArr[0], NumberArr[1]);
    alert (readyNumber.transform);
}else if (enteredNumber.length == 1){
    let readyNumber = new Figure (0, 0, NumberArr[0]);
    alert (readyNumber.transform);
}else {
    alert ('Введено неверное значение: ' + enteredNumber);
};