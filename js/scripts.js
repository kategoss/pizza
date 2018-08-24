// business logic
function Pizza() {
  this.size = [];
  // this.toppings = 0;
  this.price = [];
}

Pizza.prototype.userSizePrice = function() {
  if (this.size === "Small - $10") {
    return this.price = 10;
  } else if (this.size === "Medium - $15") {
    this.price = 15;
  } else if (this.size === "Large - $20") {
    this.price = 20;
  }
}

// Pizza.prototype.userToppings = function() {
//   if (this.toppings === "1") {
//     this.price = 1;
//   } else if (this.toppings === "2") {
//     this.price = 2
//   } else if (this.toppings === "3") {
//     this.price = 3;
//   } else {
//     this.price = 0;
//   }
// }

var totalPrice = function() {
  return this.price;
}


//figure out how to add up values of checkboxes
// ---------------------------------------
// var totalToppings = function() {
// }

// function totalToppings() {
// 		document.form.total.value = '';
// 		var sum = 0;
// 		for (i=0;i<document.form.checkbox.length;i++) {
// 		  if (document.form.checkbox[i].checked) {
// 		  	sum = sum + parseInt(document.form.checkbox[i].value);
// 		  }
// 		}
// 		document.form.total.value = sum;
// 	}
// function calculate() {
//   var el, i = 0;
//   var total = 0;
//   var number = 1;
//   while(el = document.getElementsByName("feature")[i++]) {
//     if(el.checked) {total = total + number;}
//   }
//   alert(total);
// }


// user interface logic
$(document).ready(function() {

  // var userToppings = $("input:radio[name=feature]:checked").val();

  $("#form").submit(function(event) {
    event.preventDefault();

    var userSize = $("#pizza-size").val();

    var newPizzaOrder = new Pizza();
    // pizzaOrder1.toppings = totalToppings();
    // $("#toppings").text(pizzaOrder1.toppings);
    //
    newPizzaOrder.size = userSize;
    // newPizzaOrder.size = userSize();
    // // pizzaOrder1.userToppings();
    newPizzaOrder.price = totalPrice();
    $(".total").text(newPizzaOrder.price);

  });

  // $(".total").show();
  // $("#submit").val("");
});
