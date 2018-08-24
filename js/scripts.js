// business logic
function Pizza() {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.userSizePrice = function() {
  if (this.size === "small") {
    this.price = 10;
  } else if (this.size === "medium") {
    this.price = 15;
  } else if (this.size === "large") {
    this.price = 20;
  }
}

Pizza.prototype.userToppings = function() {
  if (this.toppings >= "1") {
    this.price = 1;
  } else if (this.toppings >= "2") {
    this.price = 2
  } else if (this.toppings >= "3") {
    this.price = 3;
  } else {
    this.price = 0;
  }
}

var totalPrice = function() {
  return Pizza.userSizePrice += Pizza.userToppings;
}

function calculate() {
  var el, i = 0;
  var total = 0;
  var number = 1;
  while(el = document.getElementsByName("feature")[i++]) {
    if(el.checked) {total = total + number;}
  }
  alert(total);
}


// user interface logic
$(document).ready(function() {



  var pizzaOrder1 = new Pizza();

  $("#submit").submit(function(event) {
    event.preventDefault();
    pizzaOrder1.price = totalPrice();

    $(".total").show();
    $("#cost").text(pizzaOrder1.price);
  });

  // $("#submit").val("");
});
