let fruits = ["apple", "strawberry", "banana", "orange", "mango"];
//a

let IsString = fruits.every((fruit) => typeof fruit === "string");
console.log(IsString);

//b

let firstCharacter = fruits.some((fruits) => fruits.startsWith("a"));
console.log(firstCharacter);

//c
let filteredArray = fruits.filter(
  (fruits) => fruits.startsWith("b") || fruits.startsWith("s")
);
console.log(filteredArray);

//d
let favFruit = fruits.map((fruits) => `I like ${fruits}`);
console.log(favFruit);

//e
favFruit.forEach((fruits) => console.log(fruits));
