function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function () {
		return this.rooms - this.booked										// {return "There are " + (this.rooms - this.booked) + " rooms left."};
	};
};

var rri = new Hotel ("Red Roof Inn", 250, 230);								// creating a box
var alex = new Hotel ("The Alexander", 500, 150);

var hotels = [rri, alex];

function showAllHotelsInfo() {												// 
	for (var h in hotels) {													// Use "h">> index
		
		var hotelName = hotels[h].name;										// Grabbing the name and adding it to the document aka HTML Document
		var	hotelHtmlText = document.createTextNode(hotelName);				// CreateTextNode is essentially a box that temporarily holds stuff aka <li> tags 
		// Talk more about createElement
		var listItem = document.createElement("li");						// Grab this hotel text (variables) and put it within the ("li")
		listItem.appendChild(hotelHtmlText);								
		document.getElementById("hotels").appendChild(listItem)				// Grabs UL to place Lists
			// <li> "Red Roof Inn"</li>	
	}
}
showAllHotelsInfo();
			// <ul id = "hotels">
			// 		<li> "Red Roof Inn"</li>
			// 		<li> "The Alexander"</li>
			// </ul>
