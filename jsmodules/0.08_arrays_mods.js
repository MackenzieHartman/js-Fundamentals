// Module #8 Challenge:

//---------------------------------------------------------------------------------------------------

// Bronze
// Create an array of your favorite hobbies.

var hobbies = ["Working Out", "Playing Soccer", "Traveling", "Shopping", "Boating", "Camping"]

//---------------------------------------------------------------------------------------------------

// Silver
// Create an array of awesome cars.
// Create a for loop to print out each of the cars to the console.

var awesomeCars = ["Zenvo ST1", "Lamborghini Aventador", "McLaren F1", "Bugatti Veyron", "Porsche 911", "Mercedes SLS"]
for (var cars in awesomeCars) {
	console.log(awesomeCars[cars])  
}

//---------------------------------------------------------------------------------------------------

// Gold
// Create an array where each element is an array of different lists.(I.E. 0 is your cars, 1 is your pets, 2 is your children). 
// Create a loop to print out every element.

var awesomeCars = [      

						["ST1", "TS2"], 


						["Aventador", "Centenario"], 


						["F1", "720S"], 


						 ["Veyron", "Chiron"]
					]
for (var cars in awesomeCars) {
	// console.log(awesomeCars[cars]);					// Leave commented out
	for (var models in awesomeCars[cars]) {
		console.log(awesomeCars[cars][models])
	}
// console.log(awesomeCars[cars])  						//Leave commented out
}

//Index 2
//--------------------------------------------------
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
//[index][array]
//  var crack =[[]]
//  crack[0][3]
//  for (var i in crack) {						// i >> index ; crack >> array 
// 	for (var n in crack[i]) {
// 		console.log(crack[i][n])
// 	}
// }

//---------------------------------------------------------------------------------------------------

// Other Challenges:
 
// Random number should be between 0 - 50

// Challenge #1
// Create an array and fill it with 15 random numbers (Learn the random function)
// Write code to determine how many prime numbers there are

var fifteenRandoms = [];
for(var i = 0; i < 15; i++){
    fifteenRandoms.push(Math.floor(Math.random() * 50));
}
console.log(fifteenRandoms);
function isPrime(value){
    
    for(var i = 2; i < value; i++){
        if(value % i === 0){
            return false;
        }
        else{
            return true;
        }
    }
}
var primes = [];
for(var y = 0; y < fifteenRandoms.length; y++){
    if (isPrime(y) === true) {
        primes.push(y);
    }
}
console.log(primes);

//---------------------------------------------------------------------------------------------------

// Challenges #2
// Create an empty array
// With a loop, fill it with all integers between 5 and 45
// Iterate through the loop and remove all numbers that are multiples of 3 or 5
// Iterate through the loop and change all numbers that end in a 1 to 0

// Challenges #3
// Create an array of 5 words
// Write code to create another array filled with 5 numbers
// Write code to create an array with 5 elements with a word and a number separated by a dash

//---------------------------------------------------------------------------------------------------

//Challenges #4
// Create an array with every letter in the alphabet 
// Write code to make an array of 5 words, each with 5 random letters
// (["jeodp", "bactg", "aqpvy", "bqwzs", "poebt", "xtser"])

function getRandomInt(min, max) { 								// Math.floor((Math.random() * 10) + 1);
  min = Math.ceil(min);											// May use rather than max
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var rand = [];
var word = "";

for(bet = 0; bet <5; bet++){

    for(lett = 0; lett <5; lett++){

        word = word.concat(alph[(getRandomInt(1,27) - 1)]);

    }//end inside for

    rand.push(word);
    word = "";

}//end outside for

console.log(rand);

// alphabet=[];
// for(let ctr=0;ctr<26;ctr++)alphabet.push(String.fromCharCode(ctr+97));    // Code to generate the alphabet for you