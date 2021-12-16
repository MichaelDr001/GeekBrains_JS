const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

class GoodsItem {
  constructor(title, price, id) {
    this.title = title;
    this.price = price;
    this.id = id;
  };

  render() {
    return `
    <div class="goods-item">
      <h3 class="goods_title">${this.title}</h3>
      <p class="goods_price"><span class="second_symbol">$</span>${this.price}</p>
      <p class="good_number"><span class="number_symbol">№ </span>${this.id}</p>
    </div>`;
  };
};

class GoodsList {
  constructor() {
    this.goods = [];
    // this.cart = cart;
  };

  fetchGoods() {
    fetch(`${API_URL}catalogData.json`)
    .then((response) => {
      return response.json();
    })
    .then((request) => {
      this.goods = request.map(good => ({title: good.product_name, price: good.price, id: good.id_product}))
      this.render();
    })
    .catch((err) => { 
      console.log(err.text)
    })
  };

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.id);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  };  

  createCost() {
    var costSum = this.goods.reduce(function (acc, curr) {
      return acc + curr.price;
    }, 0);
  
    console.log(costSum);
  };

  // addToCart() {
  //   fetch(`${API_URL}addToBasket.json`)
  //     .then(() => {
  //       console.log(id, this.goods)
  //       this.cart.add(this.goods.find((good) => good.id == id))
  //     });
  // };
};  

class CartItem extends GoodsItem{
  constructor(title, price, id) {
    super(title, price, id)
  };
};

class CartList {
  constructor() {
    this.list = [];
  };

  fetchCart() {
    fetch(`${API_URL}getBasket.json`)
    .then((response) => {
      return response.json()
    })
    .then((goods) => {
      this._list = goods.contents.map(good => ({title: good.product_name, price: good.price, id: good.id_product}))
      this.render()
    });
  };

  // delFromCart() {
  //   fetch(`${API_URL}deleteFromBasket.json`)
  //     .then(() => {
  //       const index = this._list.findIndex((good) => good.id == id)
  //       this._list.splice(index, 1)
  //       this.render()
  //     });
  // };
};

const list = new GoodsList();
list.fetchGoods();
list.createCost();