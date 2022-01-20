const NUMBER_BOX = 10;
let container = document.querySelector(".container");
var toStop = true;

for (let i=0; i<NUMBER_BOX; i++) {
  randNum = Math.floor(Math.random() * 101);
  var div = document.createElement("div");
  div.className = "box";
  var span = document.createElement("span");
  span.textContent = randNum;
  div.appendChild(span);
  div.addEventListener("click", onBoxClick);
  container.appendChild(div);
}

// This function is called when any box is clicke
function onBoxClick(event) {
  if (toStop) {
    let div = event.target;
    let span = div.children[0];
    span.style.opacity = 1;
    number = span.textContent;
    if (span.textContent % 2 === 0) {
      div.style.backgroundColor = "green";
      span.textContent = "WON " + number;
    } else {
      div.style.backgroundColor = "red";
      span.textContent = "LOST " + number;
      toStop = false;
    }
  }
}
