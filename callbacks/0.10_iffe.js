/*
	iffe = Immediatly-invoked Function expression

*/

(function printNum(){
	var a = 5;
	console.log(a);
})();


// Will Error out > NOT A FUNCTION 
var x = "hey guys";  // < needs a semicolon to work | otherwise will error out!

(function printNum(){
	var a = 5;
	console.log(a);
})();

//================================================================================================

// OR
// function printName(){
// 	var name = "John";
// 	console.log(name)
// }

// printName();

//================================================================================================
// Create a iffe that counts from 1-10.

(function printNum(){
	for (var i = 1; i < 11; i++) { 
		console.log(i);
	}
})();

//================================================================================================
// FIX THIS CODE

var smartCar = {};

var smartCarMPG = function(totalMiles, totalGallons){

	// var smartCar =
	
	return{
		calculateMpg : function(){
			console.log("MPG: ");
			return totalMiles / totalGallons;
		}
	};
};

smartCar.MPG = smartCarMPG(1650, 15);
console.log(smartCar.MPG);
console.log(smartCar.MPG.calculateMpg());
console.log(smartCar.MPG);