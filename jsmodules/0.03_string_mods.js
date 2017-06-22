// Module #3: strings
// Directions: Inside of the 0.03_javascriptfundamentals folder, create a file called 0.03_strings.js.

//-------------------------------------------------------------------------------------------------------------------

// Bronze
// Using at least two different variables and string concatenation, print the following statement to the console:

var high = "BigTime High School"; // partOne
var year1 = 1994;				  // partTwo

console.log("I graduated from " + high + " in " + year1 + ".");
// console.log(partOne + partTwo);
//-------------------------------------------------------------------------------------------------------------------

// Silver
// Create three variables: Year, Make, & Model of your car.
// Then, create one variable that holds a string that concatenates all of those variables. 
// Finally, print the following statement to the console:

var year = 2011;
var make = "Kia";
var model = "Optima";

var stringy = "I drive a " + year + " " + make + " " + model;
console.log(stringy);

//-------------------------------------------------------------------------------------------------------------------

// Gold
// Take a simple lowercase string and write code that turns all the letters to uppercase letters.
// Print before and after to the console:

var lowerString = "help!!!!";
console.log(lowerString);
console.log(lowerString.toUpperCase());