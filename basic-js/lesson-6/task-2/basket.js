'use strict';

// Создаём хранилище товаров
const prodArr = [
    {name: 'Шарф', price: 300},
    {name: 'Штаны', price: 700},
    {name: 'Перчатки', price: 250},
    {name: 'Пуховик', price: 2000},
    {name: 'Рубашка', price: 640},
    {name: 'Куртка', price: 1400},
    {name: 'Костюм', price: 2800}
];

//Получаем родительские элементы
let allProducts = document.querySelector('.all__products');
let prodDescription = document.querySelector('.prod__description');
let basketDescription = document.querySelector('.basket__description');

function createProduct (product, id){
    let fullProd = document.createElement('div');
    fullProd.className = 'prod__description';
    fullProd.innerHTML = `
    <p class="prod_name">${product.name}</p>
    <p class="prod_price">$${product.price}</p>
    <button class="buy_btn btn${id}">Добавить в корзину</button>
    `;
    allProducts.appendChild(fullProd);
};

window.addEventListener('load', function (){
    prodArr.forEach(createProduct);
});