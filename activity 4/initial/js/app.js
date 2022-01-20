let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
container2.appendChild(container1.childNodes[5]);
//  2- Remove item 4
container2.removeChild(container2.childNodes[1]);
// 3- Create a new item 10 and add it to container 3
var newChild = document.createElement("div");
newChild.className = "item";
newChild.textContent = 10;
container3.appendChild(newChild);
//  4- Set all item in blue containers  background color to  red
let redList = document.querySelectorAll(".containerBlue .item");
for (let value of redList) {
    value.style.color = "red";
}