// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  // TODO
  let newObj = {};
  //  2- Set the description from the text field
  // TODO
  newObj.description = document.getElementById("description").value;
  // 3- Set the priority from select field
  // TODO
  pri = 0
  if (document.getElementById("priority").value == "Hight") {
    pri = 1;
  }
  newObj.priority = pri
  // 4- Add the new object to the array
  // TODO
  tasks.push(newObj)
  console.log(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
