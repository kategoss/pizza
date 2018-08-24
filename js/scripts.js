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

var totalPrice = function() {
  return this.size += this.toppings;
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

  $("#form").submit(function(event) {
    event.preventDefault();

    var userToppings =
    $("input:checkbox[name=toppings]:checked").each(function() {
      userToppings += parseInt($(this).val());
    })

    var userSize = $("#pizza-size").val();

    var newPizzaOrder = new Pizza();

    newPizzaOrder.size = userSize;
    // console.log(newPizzaOrder);
    newPizzaOrder.toppings = userToppings;
    // console.log(newPizzaOrder);
    // newPizzaOrder.toppings = userToppings();
    newPizzaOrder.price = totalPrice();
    $("#cost").text(newPizzaOrder.price);
    console.log(newPizzaOrder);
  });

  $(".total").show();
  // $("#submit").val("");
});
