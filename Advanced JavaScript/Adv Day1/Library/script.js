// Author constructor
function Author(name, email) {
  this.name = name;
  this.email = email;
}

// Book constructor
function Book(name, price, author) {
  this.name = name;
  this.price = price;
  this.author = author;
}

let books = [];
let numberOfBooks = 0;

document
  .getElementById("numberOfBooksForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    numberOfBooks = document.getElementById("numberOfBooks").value;
    document.getElementById("numberOfBooksForm").style.display = "none";
    displayBookForm();
  });

function displayBookForm() {
  const bookFormContainer = document.getElementById("bookFormContainer");
  bookFormContainer.innerHTML = `
    <form id="bookForm">
      <label for="bookName">Book Name:</label>
      <input type="text" id="bookName" name="bookName" />
      <div id="bookNameError" class="error-message"></div>
      
      <label for="bookPrice">Book Price:</label>
      <input type="number" id="bookPrice" name="bookPrice" />
      <div id="bookPriceError" class="error-message"></div>
      
      <label for="authorName">Author Name:</label>
      <input type="text" id="authorName" name="authorName" />
      <div id="authorNameError" class="error-message"></div>
      
      <label for="authorEmail">Author Email:</label>
      <input type="email" id="authorEmail" name="authorEmail" />
      <div id="authorEmailError" class="error-message"></div>
      
      <button type="submit">Add Book</button>
    </form>
  `;

  document.getElementById("bookForm").addEventListener("submit", addBook);
}

function displayBooksTable() {
  const booksTableContainer = document.getElementById("booksTableContainer");
  booksTableContainer.innerHTML = `
    <table id="booksTable">
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Book Price</th>
          <th>Author Name</th>
          <th>Author Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `;
  displayBooks();
}

function displayBooks() {
  const tbody = document.querySelector("#booksTable tbody");
  tbody.innerHTML = "";

  books.forEach((book, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td contenteditable="true" onblur="updateBook(${index}, 'name', this.innerText)">${book.name}</td>
      <td contenteditable="true" onblur="updateBook(${index}, 'price', this.innerText)">${book.price}</td>
      <td contenteditable="true" onblur="updateBook(${index}, 'authorName', this.innerText)">${book.author.name}</td>
      <td contenteditable="true" onblur="updateBook(${index}, 'authorEmail', this.innerText)">${book.author.email}</td>
      <td>
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function updateBook(index, field, value) {
  if (field === "name") {
    books[index].name = value;
  } else if (field === "price") {
    books[index].price = value;
  } else if (field === "authorName") {
    books[index].author.name = value;
  } else if (field === "authorEmail") {
    books[index].author.email = value;
  }
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

function validateBookForm(bookName, bookPrice, authorName, authorEmail) {
  let isValid = true;

  document.querySelectorAll(".error-message").forEach((el) => {
    el.textContent = "";
  });

  if (!bookName || bookName.trim() === "") {
    document.getElementById("bookNameError").textContent =
      "Please enter a valid book name.";
    isValid = false;
  }

  if (!bookPrice || isNaN(bookPrice) || bookPrice <= 0) {
    document.getElementById("bookPriceError").textContent =
      "Please enter a valid book price.";
    isValid = false;
  }

  if (!authorName || authorName.trim() === "") {
    document.getElementById("authorNameError").textContent =
      "Please enter a valid author name.";
    isValid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!authorEmail || !emailPattern.test(authorEmail)) {
    document.getElementById("authorEmailError").textContent =
      "Please enter a valid author email.";
    isValid = false;
  }

  return isValid;
}

function addBook(e) {
  e.preventDefault();

  const bookName = document.getElementById("bookName").value;
  const bookPrice = document.getElementById("bookPrice").value;
  const authorName = document.getElementById("authorName").value;
  const authorEmail = document.getElementById("authorEmail").value;

  if (!validateBookForm(bookName, bookPrice, authorName, authorEmail)) {
    return;
  }

  const author = new Author(authorName, authorEmail);
  const book = new Book(bookName, bookPrice, author);

  books.push(book);
  if (books.length === parseInt(numberOfBooks)) {
    document.getElementById("bookFormContainer").style.display = "none";
    displayBooksTable();
  }
  this.reset();
}

document.getElementById("bookForm").onsubmit = addBook;
