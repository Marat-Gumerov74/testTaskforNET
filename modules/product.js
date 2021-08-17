class Product {
  constructor() {
    this.name = 'product';
    this.price = 100;
  }

  setPrice(price) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getName() {
    return this.name;
  }

  test() {
    console.log('work');
  }
}

module.exports = Product;