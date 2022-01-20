function addTask(event) {
  // --------- TO HELP YOU --------------------------
  // 1- Prevent default to avoid to refresh the page
  event.preventDefault();
  // 2- Get the form inputs  information
  let getTitle = document.getElementById("taskId").value;
  let getColor = document.getElementById("color").value;
  let getDate = document.getElementById("date").value;
  console.log(getTitle)
  console.log(getColor)
  console.log(getDate)
  // 3- Check if task text, color, date are defined :
    //  If not defined, display a warnning        "You must fill all inputs"
  let isFilled = false;
  if (getTitle && getColor && getDate) {
    isFilled = true;
  }
  // 4 - If defined:
  // 4-1- Create a span for the taks name
  //    - class = "task-name"
  let taskName = document.createElement("span");
  taskName.textContent = getTitle;
  taskName.className = "task-name";
  // 4-2- Create a span for the taks date
  //    - class = "task-date"
  let taskDate = document.createElement("span");
  taskDate.textContent = getDate;
  taskDate.className = "task-date";
  // 4-3- Create a p containing the 2 spans
  let containTask = document.createElement("p");
  containTask.appendChild(taskName);
  containTask.appendChild(taskDate);
  // 4-4- the P background color is the selected color - the text is back
  containTask.style.backgroundColor = getColor;

  let tasksContainer = document.querySelector("div.dashboard");
  if (isFilled){
    tasksContainer.appendChild(containTask);
  } else {
    window.confirm("You must fill all inputs")
  }
}

// MAIN ----------------------------------------------------
const btnAddTask = document.getElementById("addTaskButton");
btnAddTask.addEventListener("click", addTask);
