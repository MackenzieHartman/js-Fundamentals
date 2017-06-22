// FUNCTION CALLBACKS IN JAVA SCRIPT
var fs = require('fs');

/*
	request = preapre_the_request();
	send_request_asynchronously (request, function(response){
		display (repsonse);
	});

*/
// getBulls([path], callback)
function getBulls(filepath, done){
	// Telling filesystem to read a file that the user of the function passes into as an argument. 
	// Then we are creating a callback to handle that case.
	fs.readFile(filepath, function(err, bulls){
		// Boolean expression: if error, print out error message | error handling
		if (err) return done(err);

		fs.readFile('0.08_bulls.dictionary', function(err, dict){
			// Boolean expression: if error, print out error message | error handling
			if (err) return done(err);

			compareBulls(bulls, dict);
		})
	})

	var compareBulls = function (bulls, dict){
	// Turn the items from these files into arrays then split them
	dict = dict.toString().split('\n');
	bulls = bulls.toString().split('\n').filter(function(bulls){
		// Going over the dictionary, then its checking if the bulls are located inside of the dictionary.
		// If it is then it's returning that value.
		return dict.indexOf(bulls) !== -1
	})
	done(bulls);
}
}
// variable way

getBulls('0.08_bulls.txt', function(bulls){

	console.log(bulls);
})

// Another example of callback

console.log("Hey tell me your name?")
var printNameInThreeSeconds = setTimeout(function(){
	console.log("Bryce");
}, 3000);
console.log("Nice to meet you!");

