function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

//earlier it was like this.this is the implicit releation ship
// Circle.prototype = Object.create(Object.prototype)
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(2);

console.log(s);
