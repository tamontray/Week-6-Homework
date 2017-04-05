$( document ).ready(function() { 

//create array for dropdown city options
var cities = ["NYC", "SF", "LA", "ATX", "SYD"]

//create change event

$("#city-type").on("change", function() {

//set variable "selection" = to what was clicked
	var selection = $(this).val().toLowerCase();

//change the body class to the css class = to selection (changed css classes to make this happen)
	$("body").attr("class", selection);
});

//display each array value in dropdown

$.each(cities, function(index, value) {
	$("#city-type").append($("<option></option>").html(value));
});


//ready!
console.log("ready!");
});