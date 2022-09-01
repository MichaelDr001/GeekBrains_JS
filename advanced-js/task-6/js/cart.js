
// Работа с Vue.js

Vue.component('cart-contents', {
    template: `
    <div class="basket__item">
        <img src="img/prod8.jpg" alt="img" class="basket_img">
        <div class="item__info">
            <div class="item_header">
                <h3 class="item-header_text">mango people t-shirt</h3>
                <i class="fas fa-times"></i>
            </div>
            <p class="item_attribute">Prise: <span class="price_color">$300</span></p>
            <p class="item_attribute">Color: red</p>
            <p class="item_attribute">Size: XL</p>
            <label for="quantity_second" class="item_quantity">
                <p class="item_attribute">Quantity: </p>
                <input type="text" class="quantity_num" id="quantity_second">
            </label>
        </div>
    </div>
    `
});