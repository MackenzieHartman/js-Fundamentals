var fs = require('fs');

/*
	request = preapre_the_request();
	send_request_asynchronously (request, function(response){
		display (repsonse);
	});

*/

function getManUnited(filepath, done){
	// Telling filesystem to read a file that the user of the function passes into as an argument. 
	// Then we are creating a callback to handle that case.
	fs.readFile(filepath, function(err, getManUnited){
		// Boolean expression: if error, print out error message | error handling
		if (err) return done(err);

		fs.readFile('0.09_manunited.dictionary', function(err, dict){
			// Boolean expression: if error, print out error message | error handling
			if (err) return done(err);

			compareManUnited(getManUnited, dict);
		})
	})

	var compareManUnited = function (ManUnited, dict){
	// Turn the items from these files into arrays then split them
	dict = dict.toString().split('\n');
	ManUnited = ManUnited.toString().split('\n').filter(function(ManUnited){
		// Going over the dictionary, then its checking if the bulls are located inside of the dictionary.
		// If it is then it's returning that value.
		return dict.indexOf(ManUnited) !== -1
	})
	done(ManUnited);
}
}
// variable way


getManUnited('0.09_manunited.txt', function(ManUnited){

	console.log(ManUnited);
})