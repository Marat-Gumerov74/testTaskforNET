const Product = require("./product");
const Purchase = require("./purchase");
const Base = require("./base");

class ui {
  constructor() {
    this.base = new Base();
    this.memory = null;
  }

  addPurchase(date, amount, obj = null) {
    let key = (obj != null) ? Object.keys(obj)[0] : null;
    const product = new Product();
    const purchase = new Purchase(product, date, amount);

    if (key){
      switch (key) {
        case 'discountPersent':
          purchase.setDiscountPersent(obj[key]);
          break;
        case 'discountShipping':
          purchase.setDiscountShipping();
          break;
        case 'discountWithBonus':
          purchase.setDiscountWithBonus(obj[key]);
          break;
        default:
          console.log(`error: incorrect type Discount`);
          break;
      }
    }
    this.addToBase(purchase);
  }

  addToBase(element) {
    this.base.add(element);
  }

  sortByDate() {
    let objCopy = Object.assign({}, this.base.getBase());
    let collection = Object.entries(objCopy);
    const len = collection.length;

    let gap = Math.floor(len / 2);
      while (gap >= 1){
        for (let i = gap; i < len; i++) {
          const currentData = collection[i][1].getData();
          const currentPurchase = collection[i][1];
           let k = i;
          while (k > 0 && collection[k - gap][1].getData() > currentData) {
            collection[k][1] = collection[k - gap][1];
            k -= gap;
          }
          collection[k][1] = currentPurchase;
         }
        gap = Math.floor(gap / 2);
     };

    this.base.setBase(Object.fromEntries(collection));
  }

  displayAll() {
    let collection = Object.entries(this.base.getBase());
    let str;
    for (let i = 0; i < collection.length; i++) {
      str += `\t${collection[i][0]} ${collection[i][1].getInfo()}`;
    }
    console.log(str);
  }

  displayFrom(obj) {
    let base = Object.values(obj);
    for (const key in base) {
      console.log( `${base[key].getInfo()}`)
    }
  }

  isSalesOfDate(date) {
    let base = Object.values(this.base.getBase());
    return Boolean (base.filter(el => el.getData() == date));
  }

  displayDiscountBy(nameDiscount = '') {
    switch (nameDiscount) {
      case 'discountPersent':
        this.reporting('Выборка: со скидкой по проценту:', 'discountPersent');
        break;
      case 'discountShipping':
        this.reporting('Выборка: со скидкой на транспорт:', 'discountShipping');
      break;
      case 'discountWithBonus':
        this.reporting('Выборка: с бонусной скидкой:', 'discountWithBonus');
      break;
      default:
        this.reporting('Выборка: без скидок:', '');
      break;
    }
  }

  reporting(str, name) {
    console.log(`\n ${str} \n`);
    this.setMemory(this.getWithDiscountBy(name));
    this.displayFrom(this.memory);
  }

  setMemory(obj) {
    this.memory = obj;
  }

  getWithDiscountBy(name) {
    return Object.values(this.base.getBase())
           .filter(el => el.getNameDiscount() == name);
  }
}

module.exports = ui;