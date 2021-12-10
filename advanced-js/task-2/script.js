class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  };

  render() {
    return `
    <div class="goods-item">
      <h3 class="goods_title">${this.title}</h3>
      <p class="goods_price"><span class="second_symbol">$</span>${this.price}</p>
    </div>`;
  };
};

class GoodsList {
  constructor() {
    this.goods = [];
  };

  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  };

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  };  

  createCost() {
    var costSum = this.goods.reduce(function (acc, curr) {
      return acc + curr.price;
    }, 0);
  
    console.log(costSum);
  };                            //Подскажите как добавить сумму в render, не разобрался с этим.
};  

class CartItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  };

  render() {
    return '';
  };
};

class CartList {
  

  remove() {
    return '';
  };

  purchase() {
    return '';
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.createCost();