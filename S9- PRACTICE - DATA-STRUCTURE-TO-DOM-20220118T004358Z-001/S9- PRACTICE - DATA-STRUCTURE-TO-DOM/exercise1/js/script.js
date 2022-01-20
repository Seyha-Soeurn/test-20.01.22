// This is our data structure of TASKS
let tasks = [
  { description: "Do homework", priority: 1 },
  { description: "Wash clothes", priority: 0 },
  { description: "Dream about Javascript", priority: 1 },
];

function displayArray(array) {
  // 1 - From the parent body : create a new div  (class : container)
  // 2 - For all tasks,  create a new div (class : item), and append it the container
  // 3- The priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
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
}

displayArray(tasks);
