// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
let isTrue = true
function displayArray(array) {
  //1- You have to delete the old node parent were is stored the items of your list
  // 2-Create a new container that will contain the items in your list
  // 3 - For all tasks,  create a new div (class : item), and append it the container
  // 3.1 the priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
  if (!isTrue) {
    document.body.removeChild(document.getElementsByClassName("container")[1])
  }
  let contain = document.createElement("div");
  contain.className = "container";
  document.body.appendChild(contain)
  for (let obj of array) {
    let newEle = document.createElement("div");
    newEle.className = "item";
    newEle.textContent = obj.description;
    if (obj.priority == 1) {
      newEle.style.backgroundColor = "red";
    } else {
      newEle.style.backgroundColor = "gray";
    }
    contain.appendChild(newEle)
  }
  isTrue = false
}

function addItem() {
  // 1- Create a new task
  let newObj = {};
  //  2- Set the description from the text field
  newObj.description = document.getElementById("description").value;
  // 3- Set the priority fro from select field
  if (document.getElementById("priority").value == "Hight") {
    newObj.priority = 1;
  } else {
    newObj.priority = 0;
  }
  // 4- Add the new object to the array
  tasks.push(newObj)
  // 5- Call  the displayArray function to refresh the DOM
  displayArray(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
