// implement Stack operation by Class
var Stack = function () {
  var items = []; // private variable
  // this.items = []; // this items is available globally

  // add element to stack top
  this.push = function (element) {
    items.push(element);
  }

  // remove item from stack top
  this.pop = function () {
    return items.pop();
  }

  // get items
  this.getItems = function () {
    return items;
  }

  // get element on stack top
  this.peek = function () {
    return items[items.length - 1];
  }

  // check if items is empty
  this.isEmpty = function () {
    return items.length === 0;
  }

  // clear stack
  this.clear = function () {
    items = [];
  }

  // get stack size
  this.size = function () {
    return items.length;
  }
}