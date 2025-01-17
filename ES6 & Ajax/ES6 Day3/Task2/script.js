const target = {};

const handler = {
  set(obj, prop, value) {
    if (prop === "name") {
      if (typeof value !== "string" || value.length !== 7) {
        throw new Error("The name property must be a string of 7 characters.");
      }
    } else if (prop === "address") {
      if (typeof value !== "string") {
        throw new Error("The address property must be a string.");
      }
    } else if (prop === "age") {
      if (typeof value !== "number" || value < 20 || value > 60) {
        throw new Error("The age property must be a number between 25 and 60.");
      }
    } else {
      throw new Error(`Property '${prop}' is not allowed.`);
    }

    obj[prop] = value;
    return true;
  },
};

const dynamicObject = new Proxy(target, handler);

try {
  dynamicObject.name = "Mohamed";
  dynamicObject.address = "21 Nemra6 Street";
  dynamicObject.age = 30;

  console.log(dynamicObject);
} catch (error) {
  console.error(error.message);
}
