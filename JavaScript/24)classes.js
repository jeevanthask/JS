class Player {
  score = 0;
  pause() {}
}

class Student {
  constructor(name, age) {
    this.name = name;
  }

  study() {
    console.log(this.name);
  }
}

const s1 = new Student("nandika", 34);
s1.study();

//static
class Car {
  static noOfCars = 12;
}

console.log(Car.noOfCars);

//inheritance
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {
  constructor(name, age, runspeed) {
    super(name, age);
    this.runspeed = runspeed;
  }
}

//objects as arguments
class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

const car1 = new Car("mustang", 2023, "blue");

displayInfo(car1);

function displayInfo(car) {
  console.log(car.model);
}
