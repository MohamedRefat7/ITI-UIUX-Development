function Box(height, width, length, material, type) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.type = type;
  this.content = [];

  this.volume = () => this.height * this.width * this.length;

  Object.defineProperty(this, "numOfBooks", {
    get: function () {
      return this.content.length;
    },
  });
}

//add book
Box.prototype.addBook = function (
  name,
  type,
  numOfChapters,
  author,
  numPages,
  publisher,
  numOfCopies
) {
  const book = {
    name,
    type,
    numOfChapters,
    author,
    numPages,
    publisher,
    numOfCopies,
  };
  this.content.push(book);
};

Box.prototype.deleteBook = function (identifier) {
  this.content = this.content.filter(
    (book) => book.name !== identifier && book.type !== identifier
  );
};

Box.prototype.toString = function () {
  return `Box dimensions: ${this.height},${this.width},${this.length}, Material: ${this.material}, Type: ${this.type}, Number of books: ${this.numOfBooks}`;
};

Box.prototype.valueOf = function () {
  return this.numOfBooks;
};

const box1 = new Box(10, 20, 30, "cardboard", "storage");
const box2 = new Box(15, 25, 35, "plastic", "transport");

box1.addBook("Book A", "HTML", 12, "Jonas", 300, "Harverd", 5);
box1.addBook("Book B", "Css", 8, "John", 200, "Harverd", 3);

box2.addBook("Book C", "JS", 10, "Mohamed", 150, "ITI", 2);

console.log(box1.toString());
console.log(box2.toString());

console.log(`Total books : ${box1 + box2}`);
