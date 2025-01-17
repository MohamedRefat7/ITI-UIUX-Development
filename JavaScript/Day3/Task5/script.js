const rectangleProperties = {
  width: 5,
  height: 10,
  area: function () {
    return rectangleProperties.width * rectangleProperties.height;
  },
  perimeter: function () {
    return 2 * (rectangleProperties.width + rectangleProperties.height);
  },
  displayInfo: function () {
    console.log(
      "Width:" +
        rectangleProperties.width +
        " Height:" +
        rectangleProperties.height +
        " Area: " +
        rectangleProperties.area() +
        " Perimeter: " +
        rectangleProperties.perimeter()
    );
  },
};
rectangleProperties.displayInfo();
