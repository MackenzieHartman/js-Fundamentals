// Module 6 Functions Challenge

//-------------------------------------------------------------------------------------------------------------------

// Bronze
// Write a function with two strings as arguments.
// The function should concatenate the two strings into a single string and print it to the console.

function stringConcat(str1, str2) {
	console.log(str1 + str2);
		return
stringConcat("Meow", " says the cat.");
}

//-------------------------------------------------------------------------------------------------------------------

// Silver
// Write a function that will help me easily calculate monthly bills.ters such as water, power, etc.
// Print the total to console with a pretty message.

function billTotal(waterBill, powerBill, gasBill) {
	var total = Number(waterBill) + Number(powerBill) + Number(gasBill);
	console.log("Your total monthly bill is: $" + total + ".");
		return
}
billTotal(110, 98, 150);

//-------------------------------------------------------------------------------------------------------------------

//Gold
// Write a function that helps me calculate the cost of buying 100 sodas
//  at $.99 each(or whatever and however many we feel like buying).
// Figure in the tax there, too. The tax is 7 percent in Indiana.
// Return a message that says something like this:
// "100 Cokes will cost you $105.93."


function totalCost(quantity, costEach) {
	var total = Number(quantity) * Number(costEach);
	total *= 1.07; // You may also use --> total = total * 1.07
	console.log(quantity + " bottles of Coke will cost you " + "$" + total + ".");
}
totalCost(100, 0.99);