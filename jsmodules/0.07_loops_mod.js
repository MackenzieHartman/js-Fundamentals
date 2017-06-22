// Module #7
// ==========================================================================================
// Challenge:
// Bronze:
Create a for loop that counts to 20 by 2s.

for (i = 0; i <= 20; i +=2) {
	console.log(i);
}

// ==========================================================================================
// Silver:
// Create a for loop that counts to 100 by 25s.
// When you get to 50, print "Halfway there!"

for (i = 0; i <= 100; i+=25){
	if (i==50) {
		console.log("Halfway there!");
	}
	else console.log(i);
}

// ==========================================================================================
// Gold:
// Print each number, 1 through 8.
// But print 9 & 10 as "nine" & "ten"

for (i = 1; i <= 10; i++){
	if (i == 9) {
		console.log("nine");
	}
	if (i == 10) {
		console.log("ten");
	} 
	else {
		console.log(i);
	}
}
