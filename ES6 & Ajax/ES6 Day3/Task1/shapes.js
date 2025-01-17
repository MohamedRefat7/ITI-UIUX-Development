class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    throw new Error("Area method must be implemented in derived classes");
  }

  perimeter() {
    throw new Error("Perimeter method must be implemented in derived classes");
  }

  toString() {
    return `${this.name} Shape`;
  }
}

export default Shape;
