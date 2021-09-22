// task 2-3
"use strict"

let basketSpace = [{prodName: 'Товар1', prodPrice: 1500}, {prodName: 'Товар2', prodPrice: 4500}, {prodName: 'Товар3', prodPrice: 18500}];

function countBasketPrice (prod1, prod2, prod3) {
    return prod1 + prod2 + prod3;
}

let outcome = countBasketPrice (basketSpace[0].prodPrice, basketSpace[1].prodPrice, basketSpace[2].prodPrice);
console.log(outcome);