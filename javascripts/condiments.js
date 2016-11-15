"use strict";

var sandwichMaker = (function(maker) {

  
  // Private variable to store the different meat price
  var condimentPrices = {"ketchup": 0.50,
      "mustard": 0.50,
      "vinigarett": 0.80};

      maker.addCondiments = function(topping) {
        console.log("condimentPrices", condimentPrices[topping] );
        return condimentPrices[topping];
      };

      return maker;

    })(sandwichMaker);
