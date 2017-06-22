// Arrays


// [] >> index

//---------------------------------------------------------------------------------------------------

// Sample
//          <-     0 		  1      2        3        4
var students= ["Harrison", "Rose", "Ben", "Caitlyn", "Kay"];

students[5] = "Nick"
	console.log(students[0]);  // prints out Harrison
	console.log(students[-1]); // Undefined
	console.log(students);     // prints out [ 'Harrison', 'Rose', 'Ben', 'Caitlyn', 'Kay', 'Nick' ]

//---------------------------------------------------------------------------------------------------

// Pop
students.pop([]);
	console.log(students); 	   // prints out and "pops/removes" the name on the end. >> [ 'Harrison', 'Rose', 'Ben', 'Caitlyn', 'Kay']

//---------------------------------------------------------------------------------------------------

// Push
students.push("Aaron");
	console.log(students);     // prints out and "adds" Aaron to the end. >> [ 'Harrison', 'Rose', 'Ben', 'Caitlyn', 'Kay', 'Nick', 'Aaron' ]

//---------------------------------------------------------------------------------------------------

// For each loop
//   index    our array
for (var s in students) {
	console.log(students[s])   // prints out each name in 1 column / row after row
}

// OR 
console.log(students[0]);       // would do the same as above
console.log(students[1]);		// would do the same as above
console.log(students[2]);		// would do the same as above


for (var s in students) {
	console.log(students[s] + " is in the position of: " + s) 
}

//---------------------------------------------------------------------------------------------------

// Challenge: Create an array of numbers 1-10 then use a "F0R IN LOOP" to print it to the console.

var numbers = [1,2,3,4,5,6,7,8,9,10];
for (var n in numbers) {
	console.log(numbers[n])
}

//---------------------------------------------------------------------------------------------------

// Create a for loop that pushes numbers into a empty array

var numArry = [];
for (var num= 1; num < 11 ; num++) {       // ++ +!
	console.log(num);
	numArry.push(num);
}
console.log(numArry)

//---------------------------------------------------------------------------------------------------

// Create a for loop that pushes numbers into a empty array

var numArry = [];
for (var num= 1; num < 11 ; num++) {     
	console.log(num);
	numArry.push(num);
	console.log(numArry);     // Makes tree like sample
}
console.log(numArry)

//---------------------------------------------------------------------------------------------------
// console.log(numArry);

// Mixed arrays

var ranThings = ["Bryce", 45, "Summer", true, [] ];
		console.log(ranThings);

//---------------------------------------------------------------------------------------------------

// Arrays within arrays

var ranThings = ["Bryce", 45, "Summer", true, ["stuff", "stuff2"], "time"];
		console.log(ranThings);