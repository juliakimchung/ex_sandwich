"use strict";

 sandwichMaker = (function(maker) {

  // Private variable to store the different meat prices

    var meatPrices = {"salamiMeat": 0.55,
      "turkey": 0.75,
      "roastBeefMeat": 0.80,
      "hamMeat": 0.90};

      maker.addMeat = function(topping) {
        return meatPrices[topping];
      };

      return maker;

    })(sandwichMaker);
