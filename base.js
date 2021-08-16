class Base {
  constructor() {
    this.base = [];
  }

  setBase(arr) {
    this.base = arr;
  }

  clearBase() {
    this.base = [];
  }

  getBase() {
    return this.base;
  }

  add(element) {
    this.base.push(element);
  }

}
module.exports = Base;