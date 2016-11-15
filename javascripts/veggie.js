"use strict";
var sandwichMaker = (function(maker) {

  var veggiePrices = {"tomato": 0.59,
      "sprout": 0.76,
      "red onions": 0.80,
      "avocado": 0.90};

      maker.addVeggies = function(topping) {
        return veggiePrices[topping];
      }

      return maker;

    })(sandwichMaker);