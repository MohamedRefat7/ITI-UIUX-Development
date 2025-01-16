function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.displayInfo = function () {
  console.log(
    `Width: ${this.width}, Height: ${
      this.height
    }, Area: ${this.area()}, Perimeter: ${this.perimeter()}`
  );
};

const rectangle = new Rectangle(3, 8);
rectangle.displayInfo();
