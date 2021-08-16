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
    let base = this.base.getBase();
    
      const len = base.length;
      let gap = Math.floor(len / 2);
      while (gap >= 1){
        for (let j = gap; j < len; j++) {
          const current = base[j].getData();
          console.log(`current: ${current}`);
          let k = j;
          while(k > 0 && base [j - gap].getData > current) {
            base[k][date] = base[k - gap][date];
            k -= gap;
          }
          base[k][date] = current;
        }
        gap = Math.floor(gap / 2);
      }
      
      console.log(base);
      
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