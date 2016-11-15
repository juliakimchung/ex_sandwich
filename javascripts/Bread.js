"use strict";

var sandwichMaker = (function(maker) {

  
  
    var breadPrices = {"whiteBread": 0.50,
      "wheatBread": 0.70,
      "multigrain": 0.90};

      

      maker.addBread = function(topping) {
        
        return breadPrices[topping];
      };

      

      return maker;

    })(sandwichMaker);

