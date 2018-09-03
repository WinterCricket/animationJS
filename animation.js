
var notRunning = true; //prevents double-run bug

function getRandColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = "#";
	for(var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];//keep eye on this
	}
	return color;
}



function showSquare() {


	var canvas = document.getElementById("whiteBoard");
	var context = canvas.getContext("2d");

	var verPos = Math.floor((Math.random() * 199) + 1);
	var theColor = getRandColor();

	context.lineWidth = 10;
	context.strokeStyle = theColor;

	//draw line with standard butt ending

	context.moveTo(10, verPos); //horizontal, vertical
	console.log("Vertical Position: " + verPos);

	context.lineTo(400, verPos);
	context.lineCap = "butt";
	context.stroke();
	
	document.getElementById('showColor').innerHTML = theColor;
}
var animation

document.getElementById('start').onclick=function() {
	if(notRunning) {
	animation = setInterval(showSquare, 1000);
	notRunning = false;
	} else {
		alert("Draw Screen is already running.")
	}
}

document.getElementById("stop").onclick=function() {
	clearInterval(animation);
	notRunning = true;
}