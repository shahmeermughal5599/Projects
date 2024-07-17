const bookForm = document.querySelector("#book-form");
const tbody = document.querySelector("#book-list");
const containerDiv = document.querySelector(".container");

function UI() {}
UI.prototype.addBook = function (bookObject) {
  const tableRow = document.createElement("tr"); //<tr></tr>
  tableRow.innerHTML = `
            <td>${bookObject.title}</td>
            <td>${bookObject.author}</td>
            <td>${bookObject.isbn}</td>
            <td><a href="#" class="delete">X<a></td>
          `;
  tbody.append(tableRow);
};
UI.prototype.showAlert = function (message = "", className = "success") {
  // <div class="alert success">success alert</div>;
  const divElement = document.createElement("div");
  divElement.className = `alert ${className}`;
  divElement.innerText = message;

  //container div k andar bookForm se phlee is div ko add kardien
  containerDiv.insertBefore(divElement, bookForm);

  setTimeout(function () {
    divElement.remove();
  }, 2000);
};
UI.prototype.removeBook = function (currentElement) {
  currentElement.parentElement.parentElement.remove();
};

function createBookObject(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const isbn = document.querySelector("#isbn");

  if (!title.value || !author.value || !isbn.value) {
    alert("please fill the input fields");
    return;
  }

  // const bookObject = {
  //   title: title.value,
  //   author: author.value,
  //   isbn: isbn.value,
  // };

  const bookObject = new createBookObject(
    title.value,
    author.value,
    isbn.value
  );

  //   console.log(bookObject, "bookObject");
  //   return;

  const uiVariable = new UI();
  uiVariable.addBook(bookObject);
  uiVariable.showAlert("book added successfully!");
  //   const tableRow = document.createElement("tr"); //<tr></tr>
  //   tableRow.innerHTML = `
  //           <td>${title.value}</td>
  //           <td>${author.value}</td>
  //           <td>${isbn.value}</td>
  //           <td><a href="#" class="delete">X<a></td>
  //         `;

  //   tbody.append(tableRow);

  title.value = "";
  author.value = "";
  isbn.value = "";
});

tbody.addEventListener("click", function (event) {
  event.preventDefault();
  const currentElement = event.target;
  // console.log(currentElement.classList.contains("delete"), "currentElement");
  // return;
  if (
    currentElement.classList.contains("delete") &&
    confirm("Are you sure ?")
  ) {
    // currentElement.parentElement.parentElement.remove();
    const uiVariable = new UI();
    uiVariable.removeBook(currentElement);
    uiVariable.showAlert("book is removed successfully!", "error");
  }
});
