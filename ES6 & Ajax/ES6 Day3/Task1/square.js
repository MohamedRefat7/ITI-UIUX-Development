import Rectangle from "./rectangle.js";

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.name = "Square";
  }

  // toString() {
  //   return `${
  //     this.name
  //   }: Area = ${this.area()}, Perimeter = ${this.perimeter()}`;
  // }
}

export default Square;
