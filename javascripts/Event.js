"use strict";

function topping() {

console.log("target id", event.target.id);


  var currentTargetId = event.currentTarget.id;
   console.log("event.currentTarget.id", event.currentTarget.id );
   console.log("price of this item:", sandwichMaker[currentTargetId]);

  var itemPrice = sandwichMaker[event.currentTarget.id](event.target.id);

    sandwichMaker.addToppingPrice(itemPrice);

    console.log("Total Price:", sandwichMaker.getTotalPrice());
 
    sandwichMaker.addToppingList(event.target.value);

    console.log("toppinglist", sandwichMaker.getToppingList());

  var totalPriceDOM = document.getElementById("totalPrice");
  totalPriceDOM.innerHTML = `<p>Total Price: $ ${sandwichMaker.getTotalPrice().toFixed(2)}</p>
  <p>${sandwichMaker.getToppingList()}</p>`;

}

  var meatChoices = document.getElementById("addMeat");

  meatChoices.addEventListener("click", topping);

  var veggieChoices = document.getElementById("addVeggies");

  veggieChoices.addEventListener("click", topping);

  var cheeseChoices = document.getElementById("addCheese");

  cheeseChoices.addEventListener("click", topping);

  var breadChoices = document.getElementById("addBread");

  breadChoices.addEventListener("click", topping);

  var condimentChoices = document.getElementById("addCondiments");

  condimentChoices.addEventListener("click", topping);






