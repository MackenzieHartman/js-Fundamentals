// Functions

/*

	function Name_of_Function(){
	
	}

*/

//------------------------------------------------------------------------------------------------------------------

// Declaring the function
function greeting() {
	var name = "Patrick";
	console.log(name +" says\"Hellooooo Vietnam!\"");

}
// Calling the function
greeting();
// console.log(name); // Name is not defined

//-------------------------------------------------------------------------------------------------------------------

// Challenge declare a function with no parameter that prints the weather to the console
// Then call that function
function currentWeather() {
	console.log("It's sunny yall!");
}
currentWeather();

//-------------------------------------------------------------------------------------------------------------------

// var weather = "It's always sunny."
// function currentWeather() {
// 	console.log(weather);
// }
// currentWeather();

//-------------------------------------------------------------------------------------------------------------------

// Functions with parameters

function shoes(brand) {
	console.log("Man those " + brand + " are on fleek!");
}

shoes("Crocs");

function add(num1, num2) {
	console.log(num1 + num2);
}

add(34,66);

// Functions that return data
function sum(num1, num2){
	return num1 + num2;	
}

//-------------------------------------------------------------------------------------------------------------------

// Create functions that returns the answer for subtracting, mult, div, and mod numbers.
var answerToQuestion = sum(23, 17);
function sub(num1, num2) {
	return num1 - num2; 
}
function mul(num1, num2) {
	return num1 * num2;
}
function div(num1, num2) {
	return num1 / num2;
}
function mod(num1, num2) {
	return num1 % num2;
}
console.log(mod(10,3));

//-------------------------------------------------------------------------------------------------------------------

// Create a calculator function that accepts 2 arguments 2 numbers and 1 operator
// ex. calculator (2, *, 2) >> this should return 4
// hints you will need to use conditionals

// Teacher Sample
// Return "exits" the function
function calculator(num1, operator, num2) {
	if (operator == "+") {
		return num1 + num2;
	} else if (operator == "-") {
		return num1 + num2;
	} else if (operator == "*") {
		return num1 + num2;
	} else if (operator == "/") {
		return num1 + num2;
	} else if (operator == "%") {
		return num1 % num2;
	} else {
		return "Please enter a valid operator";
	}
}
	console.log(calculator(2,"+",1))
//-------------------------------------------------------------------------------------------------------------------

// My Version
function calculator(num1, operator, num2) {
	// var num1 = 
	// var num2 = 
	if (operator == "+") {
		console.log(num1 + num2);
	} else if (operator == "-") {
		console.log(num1 - num2);
	} else if (operator == "*") {
		console.log(num1 * num2);
	} else if (operator == "/") {
		console.log(num1 / num2);
	} else {
		console.log(num1 % num2);
	}
	return "Please enter a valid operator";
	}
calculator(2,"*",3)