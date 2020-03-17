var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

var settings = {
	
}

window.onload = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	c.clearRect(0, 0, canvas.width, canvas.height);

	playMessages(startMessage, function(message) {
		displayText(message);
	});

	setTimeout(function() {
		playMessages(wait5, function(message) {
			displayText(message);
		});
	}, 60000 * 5);

	setTimeout(function() {
		playMessages(wait15, function(message) {
			displayText(message);
		});
	}, 60000 * 15);

	setTimeout(function() {
		playMessages(wait30, function(message) {
			displayText(message);
		});
	}, 60000 * 30);

	setTimeout(function() {
		playMessages(wait60, function(message) {
			displayText(message);
		});
	}, 60000 * 60);
}

function displayText(text) {
	c.fillStyle = "black";
	c.fillRect(0, 0, canvas.width, canvas.height);

	c.fillStyle = "white";
	if (text.length > 70) {
		c.font = "25px Arial";
	} else {
		c.font = "30px Arial";
	}

	c.fillText(text, canvas.width / 2 - c.measureText(text).width / 2, canvas.height / 2 - 30);
}

// Go through an array with messages, and create timeouts to show to user
function playMessages(arr, callback) {
	var time = 0;

	// Loop though (m as in message)
	for (var m = 0; m < arr.length; m++) {
		const cM = m; // Constant variable for changing loop
		setTimeout(function() {
			callback(arr[cM][0]);
		}, time);

		time += arr[m][0].length * 50;
	}
}
