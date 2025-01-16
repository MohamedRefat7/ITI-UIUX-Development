function Shape() {
  if (new.target === Shape) {
    throw new Error("Cannot create an instance of an abstract class");
  }
}

function Rectangle(width, height) {
  if (Rectangle.objectCount > 1) {
    throw new Error("Cannot create more than one Square");
  }
  Shape.call(this);
  this.width = width;
  this.height = height;

  Rectangle.objectCount++;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.objectCount = 0;

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.toString = function () {
  return `Width: ${this.width}, Height: ${
    this.height
  }, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
};

Rectangle.getObjectCount = function () {
  return Rectangle.objectCount;
};

function Square(side) {
  if (Square.objectCount > 1) {
    throw new Error("Cannot create more than one Square");
  }
  Rectangle.call(this, side, side);
  Square.objectCount++;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.objectCount = 0;

Square.prototype.toString = function () {
  return `Side: ${
    this.width
  }, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
};

Square.getObjectCount = function () {
  return Square.objectCount;
};

try {
  const rect1 = new Rectangle(5, 10);
  console.log(rect1.toString());
} catch (error) {
  console.log(error.message);
}

try {
  const square1 = new Square(4);
  console.log(square1.toString());
  const square2 = new Square(4);
  console.log(square2.toString());
} catch (error) {
  console.log(error.message);
}

console.log(Rectangle.getObjectCount());
console.log(Square.getObjectCount());
