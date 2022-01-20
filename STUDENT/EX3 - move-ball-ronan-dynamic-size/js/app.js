const BALL_SIZE = 100;

let ballArea = document.getElementById("ball-area");
let ball = document.querySelector("#ball");
var widthArea = ballArea.getBoundingClientRect().width;
var heightArea = ballArea.getBoundingClientRect().height;
var ballWidth = ball.getBoundingClientRect().width;
var ballHeight = ball.getBoundingClientRect().height;

function moveLeft() {
	ball.style.left = "0px";
	// Move the box left
};

function moveRight() {
	ball.style.left = widthArea-ballWidth + "px";
	// Move the box right
};

function moveUp() {
	ball.style.top = "0px";
	// Move the box up
};

function moveDown() {
	ball.style.top = heightArea-ballHeight + "px";
  // Move the box down
};

// Get the 4 buttons and bind to the 4 functions
let buttonRight = document.getElementById("btn-move-right").addEventListener("click", moveRight);
let buttonLeft = document.getElementById("btn-move-left").addEventListener("click", moveLeft);
let buttonUp = document.getElementById("btn-move-up").addEventListener("click", moveUp);
let buttonDown = document.getElementById("btn-move-down").addEventListener("click", moveDown);
