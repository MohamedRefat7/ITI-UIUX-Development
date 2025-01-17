import Shape from "./shapes.js";

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `${this.name}: Area = ${this.area().toFixed(
      2
    )}, Perimeter = ${this.perimeter().toFixed(2)}`;
  }
}

export default Circle;
