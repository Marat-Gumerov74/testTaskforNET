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

  test() {
    console.log('work');
  }
}

module.exports = Product;