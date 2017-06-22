// Module #9 Challenge:

//---------------------------------------------------------------------------------------------------

// Bronze
// Create a person object with different properties describing them.

var person = {
	name 		:  "Mackenzie",
	age			:  26,
	hobbies    	:  ["playing soccer", "working out", "boating"],
	greeting	:  function() {return "Hey " + this.name +"," + " I am planning eveything for this weekend."}
}
//---------------------------------------------------------------------------------------------------

// Silver
// Add methods for each of the properties above that returns the value of the property(I.E. getName() returns the name).

var person = {
	name 		:  "Mackenzie",
	age			:  26,
	hobbies    	:  ["playing soccer", "working out", "boating"],
	
	getName 	:  function() {return "Hey " + this.name },
	getAge		:  function() {return "I am " + this.age + " years old."},
	getHobbies 	:  function() {return "I like to " + this.hobbies + "."} 
}
	console.log(person.getName());
	console.log(person.getAge());
	console.log(person.getHobbies());

//---------------------------------------------------------------------------------------------------

// Gold
// Create a child object that inherits all of the properties and methods from your person object.
// Add anything you want to the child object, without adding it to the person.

var person = {
	name 		:  "Mackenzie",
	age			:  26,
	hobbies    	:  ["playing soccer", "working out", "boating"],
	
	getName 	:  function() {return "Hey " + this.name },
	getAge		:  function() {return "I am " + this.age + " years old."},
	getHobbies 	:  function() {return "I like to " + this.hobbies + "."} 
}

console.log(person.getName());
console.log(person.getAge());
console.log(person.getHobbies());

// Child is an object that inherits from person.
var child = Object.create(person);   

child.birthdayPresent = "cat";
console.log(child.birthdayPresent)

//---------------------------------------------------------------------------------------------------


// #1 Create 5 person objects with attributes: name, age, favoriteShows[] (Array with at least 5 elements)
function Person(name, age, favoriteShows) {
	this.name = name;
	this.age = age;
	this.favoriteShows = favoriteShows;
}

var bob = new Person("Bob", 10, ["Batman", "Batman2", "Batman3", "Batman4", "Batman5"]);
var bill = new Person("Bill", 20, ["Hangover", "Hangover2", "Hangover3", "Batman4", "Hangover5"]);
var jon = new Person("Jon", 30, ["Deadpool", "Batman2", "Deadpool2", "Deadpool4", "Deadpool5"]);
var joe = new Person("Joe", 40, ["Batman", "Hangover2", "Deadpool3", "End of Days4", "Avatar"]);
var jim = new Person("Jim", 50, ["End of Days", "End of Days2", "End of Days3", "End of Days4", "End of Days5"]);




	// this.checkAvailability = function () {return "There are " + (this.rooms - this.booked) + " rooms left."};


// #2 THE FOLLOWING FOUR LINES ARE TO BE FUNCTIONS IN EACH PERSON OBJECT
var person = {
	// name 			:  "Dustin",
	// age   			:  33
	// favorite shows	:  []

	// name 			:  "Sam", 
	// age   			:  34
	// favorite shows	:  

	// name 			:  "Piper", 
	// age   			:  7
	// favorite shows	:  

	// name 			:  "Jake", 
	// age   			:  28
	// favorite shows 	:  

	// name 			:  "Trevor", 
	// age   			:  30	
	// favorite shows	:  



// // #3 Create a function called birthday that takes in a person and adds one to their age.

// var person2  = {
// 	birthday = function(){this.age++;
// 	}
// console.log()
// // #4 Create a function that takes in person looks at their favorite shows, then prints out the shows they have in common.


// var person2

// person 1
// person 2	

// compareShows: function(person2)
// 	for(var i in this.favoriteShows) {
// 		for(var j in person.favoriteShows) {
// 			if(favoriteShows[i] == person2.favoriteShows[j])
// 				console.log(favoriteShows[i])
// 		}

// 			0		 1		  2		   3		4       //  << Index 1
//   -----------------------------------------------
// 0	|	1	|  "cat" |	  7   |   15   |   "A"	   
//   -----------------------------------------------
// 1	|	2	|  "dog" |	 36   |   12   |   "B"				 
//   -----------------------------------------------
// 2	|	3	|  "rat" |	 42   |    9   |   "C"	   
//   -----------------------------------------------
// 3	|	4	|  "cow" |	 11   |   40   |   "D"	      
//   -----------------------------------------------
// 4	|	5	|  "bug" |	  0   |    8   |   "E"	 
//   -----------------------------------------------

// 	}
// #5 If there are no shows in common print "No shows in common"
// #6 Create a function that prints out "Hello, my name is *** and I am *** years old, and one of my favorite shows is " and then gives a random show from their list of shows

//#1

//#2
// Create an array full of all the created persons. 
// Create an array of 10 shows
// Create a function that creates a person object.
// 	This function takes in name and age
// 	Populates the favoriteShows array with 5 random shows pulled from the shows array
// 	Includes the functions for person defined above.
	
// Write a function that generates 5 people with random names (5 letters) and random ages(between 1 and 50)
// 	then adds them all to the existing array full of people


// Create a function that takes in an array and removes anyone with a name beginning with a vowel

// Create a function that takes in an array and returns the oldest person

// Create a function that takes in an array and returns an array of people in order from youngest to oldest

// Create a function that takes in an array and returns an array of people in order from oldest to youngest

// Create a function that takes in an array and returns an array with three arrays
// 	The first array is people under 20 
// 	The second is with people 20 and over, but not 35 
// 	The third is with anyone who is 35

// Create a function that takes in an array of people and returns an array the people in alphabetical order.