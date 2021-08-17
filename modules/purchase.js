class Purchase {
  constructor(product, date, amount) {
    this.product = product;
    this.date = date;
    this.amount = amount;
    this.fare = 10;
    this.consignmentPrice = this.amount * this.product.getPrice();
    this.nameDiscount = ""
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

  getNameDiscount() {
    return this.nameDiscount;
  }

  getInfo() {
    return `Название: \t${this.product.getName()}
           Цена: \t${this.product.getPrice()}
           Дата: \t${this.date}
           Количество: \t${this.amount}
           Т.Расходы: \t${this.fare}
           Общая Цена: \t${this.consignmentPrice}
           Название скидки: \t${this.nameDiscount}
           Итоговая цена: \t${this.purchasePrice}\n\n`;
  }



  setDiscountPersent(persent) {
    const discount = this.consignmentPrice * (persent / 100);
    this.setPurchasePrice(this.consignmentPrice - discount);
    this.nameDiscount = 'discountPersent';
  };

  setDiscountShipping() {
    this.setPurchasePrice(this.consignmentPrice - this.fare);
    this.nameDiscount = 'discountShipping';
  }

  setDiscountWithBonus(priceBonus) {
    this.setPurchasePrice(this.consignmentPrice - priceBonus);
    this.nameDiscount = 'discountWithBonus';
  }
}

module.exports = Purchase;