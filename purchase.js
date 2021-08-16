class Purchase {
  constructor(product, date, amount) {
    this.product = product;
    this.date = date;
    this.amount = amount;
    this.fare = 10;
    this.consignmentPrice = this.amount * this.product.getPrice();
    this.purchasePrice = this.consignmentPrice;
  };

  setPurchasePrice(num) {
    this.purchasePrice = num;
  };

  setFare(num) {
    this.fare = num;
  }

  getData() {
    return this.date;
  }

  setDiscountPersent(persent) {
    const discount = this.consignmentPrice * (persent / 100);
    this.setPurchasePrice(this.consignmentPrice - discount);
  };

  setDiscountShipping() {
    this.setPurchasePrice(this.consignmentPrice - this.fare);
  }

  setDiscountWithBonus(priceBonus) {
    this.setPurchasePrice(this.consignmentPrice - priceBonus);
  }
}

module.exports = Purchase;