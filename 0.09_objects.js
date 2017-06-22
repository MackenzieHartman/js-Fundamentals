// Objects
var empObject = {};

var johnQualls = {
//  Key			:  Value
	name 		:  "John Qualls",
	age			:  39,
	hairColor  	:  "Brown Hair"
};

console.log(johnQualls);														// Returns property: { name: 'John Qualls', age: 39, hairColor: 'Brown Hair' }
console.log(johnQualls.name);													// Returns property: John Qualls
console.log(johnQualls.name + " is of the age: " + johnQualls.age);				// Returns property: John Qualls is of the age: 39
johnQualls.height = "6ft";														// New Variable

console.log(johnQualls.height);													// Returns property: Undefined
console.log(johnQualls);														//

//--------------------------------------------------------------------------------------------------------------

// Create a animal object with the properties of type, weight, comminINndiana, and habitat.

var empObject = {};																//

var animal = {																	//

	type			:  "bear",  
	weight			:  500,
	comminINndiana	:  "false",
	habitat			:  "100 acre woods"
}

// Square bracket notation
console.log(animal["habitat"]);													// Returns property: 100 acre woods
animal["nickname"] = "Winnie";													// New Variable

console.log(animal["nickname"] + " lives in " + animal["habitat"] + ".");		// Returns property: Winnie lives in 100 acre woods.

// Reassigning Values
animal.type =  "moose"															// Variable: Has been changed from "bear" to "moose"
console.log(animal.type);														// Returns property: moose

//--------------------------------------------------------------------------------------------------------------

// Change the weight of the animal property using square bracket notation.

animal.weight = 600;
//

// Then add a new array property of moviesAboutMe Rocky & Bullwinkle, Monty Python, National Lampoons's Vacation

animal.moviesAboutMe = ["Rocky & Bullwinkle", "Monty Python", "National Lampoons's Vacation"];		// moviesAboutMe: ['Rocky & Bullwinkle', 'Monty Python', 'National Lampoons\'s Vacation' ] }

console.log(animal)

console.log(Object.keys(animal));																	// Returns property: [ 'type','weight','comminINndiana','habitat','nickname','moviesAboutMe' ]

//--------------------------------------------------------------------------------------------------------------

// // Objects with methods

var theBryceIsRight = {
	name  		:  "Bryce Green",
	age			:  55,
	vocation	:  "TA",
	email		:  "thebryceisright@gmail.com",
	greeting	:  function() {return "Greetings earthlings I am " + this.name + " I am here to learn you."; },		
			 	// References the object itself> this.name >> You do not want to put a console.log inside of a console.log. Return Key is then used.

// Create a method for contactMe and include the email property in a return statement.

	contactMe	: function() {return "Connect with me at " + this.email; },

// Create a method that calls both of the methods above.

	doBoth 		:  function() {
						console.log(this.greeting());
						console.log(this.contactMe());
						}
}

theBryceIsRight.doBoth()

console.log(theBryceIsRight.greeting());  															// Returns property: [Finished in 0.3s]

//--------------------------------------------------------------------------------------------------------------

// Object constructors

var paul = new Object;

paul.name = "Paul O'Connor";
paul.vocation = "Cirriculum Master";
paul.hobbies = ["rocking out code", "listening to good music", "baking ana muffins"];
	console.log(paul)																				// Returns Property: {}

//--------------------------------------------------------------------------------------------------------------

// Object constructor template

function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function () {return "There are " + (this.rooms - this.booked) + " rooms left."};
};       																								// hobbies: [ 'rocking out code', 'listening to good music', 'baking ana muffins' ] }

// The new keyword helps us intanitate a new object
	var jw = new Hotel("JW Marriot", 300, 250);
	var jwExp = new Hotel("Mini J'Dubs", 100, 50);

// Creating an array of hotels
	var hotels = [jw, jwExp];

// Grabbinng the ame from one of the hotels
	console.log(hotels[1].name);																		// Mini J'Dubs

// Using a for-in loop to grab all the names from the array list of hotels
	for(var h in hotels) {																					
		console.log(hotels[h].name);																	// Property Returned: Mini J'Dubs JW Marriot Mini J'Dubs
}

// console.log(jwExp.checkAvailability());																// Returns Property: There are 50 rooms left.

//--------------------------------------------------------------------------------------------------------------
