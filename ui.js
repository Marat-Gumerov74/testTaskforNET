const Product = require("./product");
const Purchase = require("./purchase");
const Base = require("./base");

class ui {
  constructor() {
    this.base = new Base();
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
          console.log(`error: штсщкусе type Discount`);
          break;
      }
    }
    this.addToBase(purchase);
  }

  addToBase(element) {
    this.base.add(element);
  }

  sortByDate(str = 'up') {
    let objCopy = Object.assign({}, this.base.getBase());
    let collection = Object.entries(objCopy);
    const len = collection.length;
    console.log(collection);

    let gap = Math.floor(len / 2);
      while (gap >= 1){
        for (let j = gap; j < len; j++) {
          const currentData = collection[j][1].getData();
          const currentPurchase = collection[j][1];
          console.log(`currentData: ${currentData}`);
          console.log('currentPurchase: ', currentPurchase);
           let k = j;
          
          // while (k > 0 && objCopy[k - gap].getData() > currentData) {
          //   objCopy[k] = objCopy[k - gap];
          //   k -= gap;
          // }
          // objCopy[k] = currentPurchase;
         }
        gap = Math.floor(gap / 2);
     }
                    // console.log(objCopy);
        // const ShellSort = arr => {
        //   const l = arr.length;
        //   let gap = Math.floor(l / 2);
        //   while (gap >= 1) {
        //     for (let i = gap; i < l; i++) {
        //       const current = arr[i];
        //       let j = i;
        //       while (j > 0 && arr[j - gap] > current) {
        //         arr[j] = arr[j - gap];
        //         j -= gap;
        //       }
        //       arr[j] = current;
        //     }
        //     gap = Math.floor(gap / 2);
        //   }
        //   return arr;
        // };
    }

}

module.exports = ui;