

// Перменная var является глобальной, в данном примере мы говорим, что "если 'а' не в window, то вывести её".
// Таким образом, получаем undefined
if (!("a" in window)) {
    var a = 1;
}
alert(a);


// Не определит а, т.к. функция присвоена значению b
var b = function a(x) {
    x && a(--x);
};
alert(a);


// Выведет тело самой функции как значение
function a(x) {
    return x * 2;
}
var a;
alert(a);


// Выведет 10, т.к. arguments берёт 2 элемент, т.е. "а" и присваивает ей 10, после чего её и выводит
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);


// Скорее всего выведет object Window, т.к. this вызывается в его области видимости
function a() {
    alert(this);
}
a.call(null);