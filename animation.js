
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


document.getElementById('buttons').onclick=function() {
	lightShow();
}