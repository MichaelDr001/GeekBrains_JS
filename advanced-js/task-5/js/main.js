
// Работа с Vue.js

const app = new Vue({
    el: '#app',
    data: {
        searchInput: '',
        mainPageProducts: [
            { cssClass: 'card-1', title: 'Down jacket', price: 150, color: 'SteelBlue', size: 32 },
            { cssClass: 'card-2', title: 'Costume', price: 350, color: 'Black', size: 41 },
            { cssClass: 'card-3', title: 'Blouse', price: 80, color: 'DarkBlue', size: 29 },
            { cssClass: 'card-4', title: 'Pants', price: 50, color: 'NavajoWhite', size: 34 },
            { cssClass: 'card-5', title: 'Blazer', price: 120, color: 'PowderBlue', size: 40 },
            { cssClass: 'card-6', title: 'Shirt', price: 100, color: 'OliveDrab', size: 26 },
        ],
        // isVisibleCart: {
        //     visible:                 <-- Закоментировал, т.к. пока не используется
        //     notVisible:
        // }
    },
    methods: {
        searchProducts() {
            filteredProducts: []
        }
    },
});

// Не особо разобрался как добавить отфильтрованный список товаров.
// При добавлении receiveRequest в mounted всё ломается



// Функционал кнопки "clear" формы поиска

const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);




//Использовал другой API, т.к. предосталенный выдаёт ошибку 404
const requestURL = 'https://jsonplaceholder.typicode.com/users';


function receiveRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }
        xhr.send();
    })
}

const body = {
    title: 'shoes',
    price: 40,
    color: 'black',
    size: 35
}

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }
        xhr.send(JSON.stringify(body));
    })
}

receiveRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
