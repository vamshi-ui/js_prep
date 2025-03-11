// objects are unordered give preference to numbers first in js

const obj = {
  hi: "12",
  1: "vamshi",
  2: "raju",
};

console.log(obj);

// pointing to current object with this key word
const person = {
  firstName: "vamshi",
  lastName: "bandela",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const [first, last] = value.split(" ");
    this.firstName = first;
    this.lastName = last;
  },
};

const behaviour = {
  agressive: true,
  introvert: true,
  valueformoney: false,
};

Object.setPrototypeOf(person, behaviour);

console.log("introvert" in person);

const target = {
  1: "1",
  2: 2,
};

Object.assign(target, { 3: 3 }, { 2: 4 });
const newObj = Object.assign({}, { 3: 3 }, { 2: 4 });

console.log(target);
console.log(newObj);

class Actions {
  constructor() {}

  startEngine() {
    console.log(`${this.name} engine started`);
  }
}

class Car extends Actions {
  #price = {
    "Swift Desire": 2000000,
    Ferrari: 4000000,
  };

  constructor(name, model) {
    super();
    this.name = name;
    this.model = model;
  }

  set carDetails(details) {
    const [name, model] = details;
    this.name = name;
    this.model = model;
  }

  get carDetails() {
    return `${this.name} car ${this.model} model`;
  }

  get carprice() {
    return this.#price[this.name];
  }
}

Object.defineProperty(Car.prototype, 'carDetails', {
    enumerable: true
  });
const newCar = new Car("Ferrari", 2015);
console.log(Object.keys(newCar));
console.log(Object.values(newCar));
console.log(Object.entries(newCar));
for (let key in newCar) {
  console.log(key);
}
// console.log(newCar.carDetails);
// newCar.carDetails = ["Swift Desire", "latest"];
// console.log(newCar.carDetails);
// console.log(newCar.carprice);
// console.log(newCar);
