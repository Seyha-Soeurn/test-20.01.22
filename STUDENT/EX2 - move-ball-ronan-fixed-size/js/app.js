let box = document.querySelector("#boxId");

function moveLeft() {
  box.style.left = "0px";
  // Move the box left
}

function moveRight() {
  box.style.left = "300px";
  // Move the box right
}

function moveUp() {
  box.style.top = "0px";
  // Move the box up
}

function moveDown() {
  box.style.top = "300px";
  // Move the box down
}

// Get the 4 buttons and bind to the 4 functions
let buttonRight = document.getElementById("btn-move-right");
let buttonLeft = document.getElementById("btn-move-left");
let buttonUp = document.getElementById("btn-move-up");
let buttonDown = document.getElementById("btn-move-down");
buttonRight.addEventListener("click", moveRight);
buttonLeft.addEventListener("click", moveLeft);
buttonUp.addEventListener("click", moveUp);
buttonDown.addEventListener("click", moveDown);
