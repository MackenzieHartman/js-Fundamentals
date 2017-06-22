// Module #2: variables
// Directions: Inside of the 0.03_javascriptfundamentals folder, create a file called 0.02_variables.js.

//---------------------------------------------------------------------------------------------------

// Bronze
// Come up with five different variables. 
// Think of real world uses for integers and create variables based on those things.
// Print the value to the console.

var bankAccount = 132467890123;
var age= 26;
var firstName = "Mackenzie";
var lastName = "Hartman";
var level = "Bronze";

console.log(bankAccount);
console.log(age);
console.log(firstName);
console.log(lastName);
console.log(level);

//---------------------------------------------------------------------------------------------------

// Silver
// Make a var called myNumber.
// Set it to 0.
// Use shorthand to add 10 to it.
// Then use shorthand to subtract 1.
// Use shorthand to multiply by 9.
// Use shorthand to divide by 7.
// Just for practice, print myNumber to the console between each operation.

var myNumber;
console.log(myNumber);
myNumber = 0;
console.log(myNumber);
myNumber += 10;
console.log(myNumber);
myNumber -= 1;
console.log(myNumber);
myNumber *= 9;
console.log(myNumber);
myNumber /= 7;
console.log(myNumber);

//---------------------------------------------------------------------------------------------------

// Gold: Lifetime Supply
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Print a statement that would say something like the following:

// Hints:
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would need total for the rest of your life.
// Output the result to the console like so: "You will need NN to last you until the ripe old age of X".
 
var age = 26;
var maxAge = 100;
var amtPerDay = 2;

var calc = (maxAge - age) * 365 * amtPerDay;

console.log("You would need " + calc + " slices of cheesecake to last you until the ripe old age of " + maxAge + ".");

//---------------------------------------------------------------------------------------------------

// Another Example 

var myAge = 23;
var maxAge = 95;
var years = maxAge - myAge;
var breathPerDay = 22000;
var lifetimeSupply;
var oxygenIntake = 0.18;
var carbonExhale = 0.36;
var roomPopulation = 24;
var worldPopulation = 7000000000;

lifetimeSupply = ((maxAge - myAge) * 365) * breathPerDay;
console.log("I will take about "+lifetimeSupply+" breaths until I am " + maxAge +"!");
console.log("This means you will breathe in " + lifetimeSupply*oxygenIntake + " grams of Oxygen.");
console.log("This also means you will exhale " + lifetimeSupply*carbonExhale + " grams of CO2.");
console.log("If everyone in this room were to live another "+years+" years, then we would collectively breathe in "+lifetimeSupply*oxygenIntake*roomPopulation+" grams of oxygen.");
console.log("This will also mean that collectively we will exhale "+lifetimeSupply*carbonExhale*roomPopulation+" grams of CO2.");
console.log("Lets say 7 billion people on the planet live exaclty "+years+" years, how much oxygen would they breathe?  "+lifetimeSupply*oxygenIntake*worldPopulation+ " grams of oxygen.");
console.log("Same for CO2: "+lifetimeSupply*carbonExhale*worldPopulation+" grams of CO2.");