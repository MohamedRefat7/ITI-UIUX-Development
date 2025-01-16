const myObject = {
  description: "any thing from hamada",
  id: "1",
  location: "cairo",
  addr: "21 st.",
  getSetGen: function () {
    for (const key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] !== "function") {
        const myKey = key.charAt(0).toUpperCase() + key.slice(1);
        Object.defineProperty(this, myKey, {
          get: function () {
            return this[key];
          },
          set: function (value) {
            this[key] = value;
          },
          configurable: true,
          enumerable: false,
        });
      }
    }
  },
};

myObject.getSetGen();
console.log(myObject.description);
console.log(myObject.id);
console.log(myObject.location);
console.log(myObject.addr);

const obj = {
  id: "22",
  location: " cairo egypt",
  addr: "21 street.",
};
//change the caller
myObject.getSetGen.call(obj);
console.log(obj.id);
console.log(obj.location);
console.log(obj.addr);
