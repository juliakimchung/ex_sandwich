"use strict";

var sandwichMaker = (function () {


// Private variable to store the price
var totalPrice = 0;

var toppingList = [];

//methods to return

return {

  getTotalPrice: function () {
    return totalPrice;
  },

  addToppingPrice: function(toppingPrice) {
      console.log("no topping", totalPrice);
      totalPrice += toppingPrice;
      console.log("add topping", totalPrice);

    },

  getToppingList: function () {
    console.log(toppingList)
    return toppingList;
  },

  addToppingList: function(topping) {
     return toppingList.push(topping);
  }



};

})(sandwichMaker|| {});