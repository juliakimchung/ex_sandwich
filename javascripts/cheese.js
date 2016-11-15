"use strict";

var sandwichMaker = (function(maker) {

  console.log("cheese.js is loaded");
  // Private variable to store the different meat prices


    var cheesePrices = {"blueCheese": 0.59,
      "swissCheese": 0.76,
      "cheddarCheese": 0.80};

      maker.addCheese = function(topping) {

        console.log("cheesePrices[topping]", cheesePrices[topping]);
        console.log("maker.addCheese", maker.addCheese);
        return cheesePrices[topping];
      };

      return maker;

    })(sandwichMaker);