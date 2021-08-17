const UI = require("./modules/ui");

const ui = new UI();
ui.addPurchase(1, 1, {'discountPersent': 1});
ui.addPurchase(3, 2, {'discountPersent': 2});
ui.addPurchase(4, 1, {'discountShipping': null});
ui.addPurchase(5, 3, {'discountShipping': null});
ui.addPurchase(10, 4, {'discountPersent': 5});
ui.addPurchase(12, 3, {'discountPersent': 3});
ui.addPurchase(15, 1);
ui.addPurchase(16, 1, {'discountWithBonus': 10});
ui.addPurchase(20, 1, {'discountPersent': 6});
ui.addPurchase(17, 2, {'discountWithBonus': 8});

ui.sortByDate();
ui.displayAll();
console.log(ui.isSalesOfDate(10));
ui.displayDiscountBy("");
ui.displayDiscountBy("discountPersent")
ui.displayDiscountBy("discountShipping")
ui.displayDiscountBy("discountWithBonus")