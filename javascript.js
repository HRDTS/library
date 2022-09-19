// Task: create a library website where you can add and delete books, and edit the "read/not read" status

//Below code creates a foldable button.

const unfoldButton = document.getElementById("unfoldButton");
const form = document.getElementById("form")
form.style.display = "none";


unfoldButton.addEventListener("click", () => {

  if (form.style.display === "none") {
    form.style.display = "block";
    unfoldButton.textContent = "FOLD FORM"
  } else {
    form.style.display = "none";
    unfoldButton.textContent = "NEW BOOK"
  }
});

// Below code is the array and the object constructor.

let myLibrary = [];

function Book(bookTitle, bookAuthor, bookPages, bookRead) {
  this.title = bookTitle
  this.author = bookAuthor
  this.pages = bookPages + " pages"
  this.read = bookRead
  
}

function addBookToLibrary(pushBook) {
  myLibrary.push(pushBook)
}


// --------------------------------------------------------------------------------
const body = document.querySelector("body")
const container = document.createElement("div")
body.appendChild(container)

container.classList.add("bookTitles")

let bookCreation;
let counter = 0;
let displayFunctie = function() {

  let bookTitle = document.getElementById("bookTitle").value
  let bookAuthor = document.getElementById("bookAuthor").value
  let bookPages = document.getElementById("bookPages").value
  let bookRead = document.getElementById("bookRead").value
  bookCreation = new Book(bookTitle, bookAuthor, bookPages, bookRead)
  myLibrary.push(bookCreation)

  const bookDiv = document.createElement("div");
  bookDiv.setAttribute("id", "bookID" + [counter])
  let textDiv = document.createElement("p")
  bookDiv.appendChild(textDiv);
  let lastArray = myLibrary[myLibrary.length - 1]
  textDiv.innerHTML = "Book Title: " + lastArray.title +  "<br /> Book author: " + lastArray.author + "<br /> Book Pages: " + lastArray.pages +
  "<br /> Reading status: " + lastArray.read
  container.appendChild(bookDiv)

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "Delete from library";
  let grabID = document.getElementById("bookID" + [counter])
  console.log(counter)
  deleteButton.addEventListener("click", () => { 
    myLibrary = myLibrary.filter(book => book != lastArray) 
    container.removeChild(grabID)
    console.log(myLibrary)
    })
  bookDiv.appendChild(deleteButton)


  const editButton = document.createElement("button")
  
    editButton.textContent = "Change reading status"
    editButton.addEventListener("click", () =>{
      //console.log(lastArray.read = "read")
     if(lastArray.read === "read") {
      lastArray.read = "not read";
      textDiv.innerHTML = "Book Title: " + lastArray.title +  "<br /> Book author: " + lastArray.author + "<br /> Book Pages: " + lastArray.pages +
      "<br /> Reading status: " + lastArray.read; 
      console.log(lastArray);
     } else if (lastArray.read === "not read") {
      lastArray.read = "read";
      textDiv.innerHTML = "Book Title: " + lastArray.title +  "<br /> Book author: " + lastArray.author + "<br /> Book Pages: " + lastArray.pages +
      "<br /> Reading status: " + lastArray.read
     } console.log(myLibrary)
     
    }); 
    bookDiv.appendChild(editButton);
    counter ++
  } 

