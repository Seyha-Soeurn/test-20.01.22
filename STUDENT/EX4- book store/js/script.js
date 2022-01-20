//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
  let removeTarget = event.target;
  if (removeTarget.className == "delete"){
    bookList.removeChild(removeTarget.parentNode);
  }
  
  // 1- Check the event if raised on the button delete 
  
  //  2  if yes, get the parent and remove it from the  bookList
}

function addBook(event) {
  event.preventDefault();
  // 1- Get the book name from the input field
  let newBookName = document.getElementById("add-book-textfield").value;
  if (newBookName.length > 0) {
    // 2- Create a new spam bookName for the book name, class name = name
    let bookName = document.createElement("span");
    bookName.textContent = newBookName;
    bookName.className = "name";
    // 3- Create a new spam deleteBtn for the button delete, class name = delete
    let btnRemove = document.createElement("span");
    btnRemove.textContent = "delete";
    btnRemove.className = "delete";
    // 4- Create a new li
    let addNewBook = document.createElement("li");
    // 5- Add bookName and deleteBtn to li and li to the  bookList UL
    addNewBook.appendChild(bookName);
    addNewBook.appendChild(btnRemove);
    bookList.appendChild(addNewBook);
    document.getElementById("add-book-textfield").value = "";
  }
}

function searchBook(event) {
  // 1- Get the search text
  let searchText = document.querySelector("#search-books input").value;
  let allBooksName = document.querySelectorAll(".name");
  // 2- Loop on all LI
  if (searchText.length > 0) {
    for (let i of allBooksName) {
      let isTrue = true;
      let name = i.textContent;
      for (let n in name) {
        for (let index in searchText) {
          if (index == n) {
            if (searchText[index].toUpperCase() != name[n].toUpperCase()) {
              isTrue = false;
            }
          }
          else if (index > name.length-1) {
            isTrue = false
          }
        }
      }
      if (isTrue) {
        i.parentNode.style.display = "block";
      }
      else {
        i.parentNode.style.display = "none";
      }
    }
  } 
  else {
    for (let i of allBooksName) {
      i.parentNode.style.display = "block"
    }
  }
    // Update the style of the LI (visible or hidden)
}



//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("submit", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);
