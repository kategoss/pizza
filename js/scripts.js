// business logic
function Pizza() {
  this.size = [];
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.userSize = function() {
  if (this.size === "Small - $10") {
    return this.size = 10;
  } else if (this.size === "Medium - $15") {
    this.size = 15;
  } else if (this.size === "Large - $20") {
    this.size = 20;
  }
}

Pizza.prototype.userToppings = function() {
  if (this.toppings === 1) {
    this.toppings = 1;
  } else if (this.toppings === 2) {
    this.toppings = 2;
  } else if (this.toppings === 3) {
    this.toppings = 3;
  } else {
    this.toppings = 0;
  }
}

Pizza.prototype.totalPrice = function() {
  return this.size += this.toppings;
}

// user interface logic
$(document).ready(function() {

  $("#form").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("#pizza-size").val();
    var totalToppings = 0;
    $("input:checkbox[name=toppings]:checked").each(function() {
      totalToppings += parseInt($(this).val());
    })

    var newPizzaOrder = new Pizza();

    newPizzaOrder.size = pizzaSize;
    newPizzaOrder.toppings = totalToppings;
    newPizzaOrder.totalPrice();
    $("#cost").text(newPizzaOrder);
    console.log(newPizzaOrder);
    $(".result").show();
  });
});
