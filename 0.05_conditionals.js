// Conditionals

/*
Boolean Operators
------------------------------------------------------
	> Greater than
	< Less than
	>= Greater or Equal
	<= Less or Equal
	== Equal to
	=== Strictly Equal to (Compares value and type)
	! Not
	!= Not Equal to
*/

console.log(1 > 3); // False
console.log(10 != 10); //False
var name ="Kenn";

console.log(name == "kenn"); // False - Capitalization counts!!
console.log(6 == "6"); // True
console.log(6 === "6"); 



// if statements
/*if (boolean expression) {
	 //some code goes here
}
*/

 if (242 % 2 === 0){
 	console.log("This number is even.");
 }
//OR
 if (4563 % 2 === 0){
 	console.log("This number is even.");
 }

//------------------------------------------------------

 var userName = "admin" 
 var password = "test123"

 if (userName == "admin"){
 	console.log("You have been granted access!");
 }
//-------------------------------------------------------

 var userName = "DragonSlayer"
 var password = "test123"

 if (userName == "admin"){
 	console.log("You have been granted access!");
 }

 if (userName == "admin" && password == "admin"){
 	console.log("You have been granted access!");
 }

 /*
 Chaining boolean expression
 ----------------------------------
 	&& and
 	||  or
 */

var userName = "admin"
var password = "admin"

 if (userName == "admin" && password == "admin"){
 	console.log("You have been granted access!");
 } else {
 	console.log("Incorrect deails"); // if statement matches variables, therefore "access was granted"
 }


// Challenge: Check if the username is the wrong value or the password
// Answer:
var userName = "admin"
var password = "admin"

if (userName == "admin" && password == "admin"){
 	console.log("You have been granted access!");
} else {
if (userName == "admin"){
 	console.log("The password is Incorrect.");
} else {
	console.log("The username is Incorrect")
 }
// console.log("Incorrect details");

/*
// if statements
if (boolean expression) {
	//some code in here
} else if (boolean expression)
	// some code in here
} else {
	//catch all
}
*/

var age = 20;

if (age >= 35){
	console.log("You can vote and also hold any place in gov.");
} else if (age >= 25){
	console.log("You can vote and run for senate.");
} else if (age >= 18) {
	console.log("You can vote.");
} else {
	console.log("You're outta luck!");
}