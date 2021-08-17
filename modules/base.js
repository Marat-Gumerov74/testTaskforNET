class Base {
  constructor() {
    this.base = {};
  }

  setBase(obj) {
    this.base = obj;
  }

  clearBase() {
    this.base = {};
  }

  getBase() {
    return this.base;
  }

  add(newElement) {
    (Object.keys(this.base).length == 0) ? this.base[Object.keys(this.base).length] = newElement:
    this.base[Object.keys(this.base).length + 1] = newElement;
  }

}
module.exports = Base;