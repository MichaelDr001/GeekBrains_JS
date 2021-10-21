
// Работа с Vue.js

const app = new Vue({
    el: '#app',
    data: {
        catalogPageProducts: [
            { cssClass: 'cat_card-1', title: 'Down jacket', price: 150, color: 'SteelBlue', size: 32 },
            { cssClass: 'cat_card-2', title: 'Costume', price: 350, color: 'Black', size: 41 },
            { cssClass: 'cat_card-3', title: 'Blouse', price: 80, color: 'DarkBlue', size: 29 },
            { cssClass: 'cat_card-4', title: 'Pants', price: 50, color: 'NavajoWhite', size: 34 },
            { cssClass: 'cat_card-5', title: 'Blazer', price: 120, color: 'PowderBlue', size: 40 },
            { cssClass: 'cat_card-6', title: 'Shirt', price: 100, color: 'OliveDrab', size: 26 },
            { cssClass: 'cat_card-7', title: 'Pants', price: 50, color: 'NavajoWhite', size: 34 },
            { cssClass: 'cat_card-8', title: 'Blazer', price: 120, color: 'PowderBlue', size: 40 },
            { cssClass: 'cat_card-9', title: 'Shirt', price: 100, color: 'OliveDrab', size: 26 },
        ]
    }
});