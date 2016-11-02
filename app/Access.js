// var number = Math.floor((Math.random() * (controls.backgroundColors.length-1)) + 1);

var backgroundColors = ['red','blue','green','turquoise', 'black', 'purple', 'brown', 'orange'];

var number = Math.floor((Math.random() * (backgroundColors.length-1)) + 1);
var randomNumber = Math.floor((Math.random() * (backgroundColors.length-1)) + 1);

var controls = {
	backgroundColors: backgroundColors,
	simonSquaresTiming: 3000,
	simonSaysTiming: 3000,
	currentColor: backgroundColors[number],
	started: false,
	victory: false,
	startTime: new Date(),
	time: 0
	};

module.exports=controls;