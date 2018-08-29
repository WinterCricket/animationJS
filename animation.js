
// function lightShow() {

// 	var showtime = getElementById('whiteBoard').

// 	displayIt = showtime.innerHTML
// }



var notRunning = true; //prevents double-run bug

function getRandColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = "#";
	for(var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}



function showSquare() {


	var canvas = document.getElementById("whiteBoard");
	var context = canvas.getContext("2d");
	 var verPos = Math.floor((Math.random() * 199) + 1);
	
}


document.getElementById('buttons').onclick=function() {
	lightShow();
}

var candocument.getElementById("whiteBoard").onclick=function() {