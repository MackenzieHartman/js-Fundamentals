// Module #5: Conditionals
// Directions: Inside of the 0.03_javascriptfundamentals folder, create a file called 0.05_conditionals.js.

//---------------------------------------------------------------------------------------------------

// Bronze 
// Write a conditional that checks an age variable and prints a different statement depending on the age.
// Handle about 5 different ages.
// For instance, if a person just turned 18, here’s an example of what the console might say:  

var age = 18;

if(age <= 15.5) {
	console.log("No driving for you!");
} else if (age <=16) {
	console.log("You can drive, but only if you have a learner's permit and there is a parent in the vehicle.");
} else if (age < 18) {
	console.log("You can drive without a parent, but they're still the boss");
} else if (age < 21) {
	console.log("You can drive, but you can't drink")
} else if (age < 25) {
	console.log("You can drive, and drink, but not with a rental car");
} else {
	console.log("You can do what you want, ha!");
}

//---------------------------------------------------------------------------------------------------

// Silver
// Create an if statement that has several conditions.
// Pretend that we(The Colts) will play four total games next year against the Patriots.
// If our record was better, talk some smack. If not, you should still talk some smack, but in a different way. 
// If the records were the same, talk some smack. You should also deal with the off chance that we don't play at all(i.e., a lockout). 
// For example, here’s what your console might look like for if we lost 3 times:

var colts = 24;
var patriots = 20;

if (colts > patriots) {
	console.log("We win!");
} else if (colts < patriots) {
	console.log("We lose :(");
} else if (colts === patriots) {
	console.log("Good tie game.");
} else {
	console.log("Invalid scores");
}

//---------------------------------------------------------------------------------------------------

// GOLD: FizzBuzz
// Disclaimer: This is a classic job interview question. It would be really good for you to memorize and understand how it’s working just for understanding of the logic behind it. There are a lot of different ways to do it.
// Write a program that prints from 1 to 100.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz" instead of the number. 
// For numbers which are multiples of both three and five print "FizzBuzz".

var num = 0;
while(num <= 100) {    // || while(num < 101) {
    if(num % 15 === 0) {
        console.log("FizzBuzz");
    } else if(num % 3 === 0){
        console.log("Fizz");
    } else if(num % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(num);
    }
    num = num + 1; // Wonky expression
}

//OR

for (var i=1; i<=100; i++) {
	if (i%3===0 && i%5===0) {
		console.log("FizzBuzz");
	} else if (i%3===0) {
		console.log("Fizz");
	} else if (i%5===0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

// How to do it in one line:
for(var i=1;i<=100;i++){console.log(i%15===0?"FizzBuzz":i%3===0?"Fizz":i%5===0?"Buzz":i)}