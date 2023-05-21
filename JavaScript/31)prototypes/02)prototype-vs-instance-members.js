function Circle(radius) {
  //Instance members
  this.radius = radius;
}

//Prototype members
Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(2);
const c2 = new Circle(2);

// log c1 in the console

//u can override the toString method
Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};
