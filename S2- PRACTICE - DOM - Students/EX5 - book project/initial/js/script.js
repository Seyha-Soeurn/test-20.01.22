// 1- Get the list of books ( tips : use the querySelectorAll )
// TODO
var bookList = document.querySelectorAll("#wrapper #book-list ul li .book-name");
var lenBookList = bookList.length;

// 2- Display the number of books on paragrah "books-number"
// TODO
document.getElementById("books-number").textContent = bookList.length;

// 3- Display the title of the books  on paragrah "books-titles"
// TODO
var titleList = "";
for (let value of bookList) {
    titleList += value.innerHTML + "," + " "
    document.getElementById("books-titles").textContent = titleList;
}


