// business logic
function Pizza() {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.userSize = function() {
  if(this.size === "small") {
    this.price = 10;
  } else if {
    this.size === "medium";
    this.price = 15
  } else if {
    this.size === "large";
    this.price = 20;
  }
}

Pizza.prototype.userToppings = function() {
  if(this.toppings >= "1") {
    this.price = 1;
  } else if {
    this.toppings >= "2";
    this.price = 2
  } else if {
    this.toppings >= "3";
    this.price = 3;
  } else {
    this.price = 0;
  }
}

var totalPrice = function() {
  return .userSize += .userToppings;
}


// user interface logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var pizzaOrder1 = new Pizza ()

    pizzaOrder1.price = totalPrice();
    $("#total").text(pizzaOrder1.price)

  $("#submit").val("");
  }
});
