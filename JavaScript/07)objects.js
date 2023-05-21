//javascript object / object literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

//factory functions
//-> these factory functions produce objects
function createCircle(radius, location) {
  return {
    radius: radius,
    location: location,
    isVisible: true,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1, 2);
console.log(circle.radius);
console.log(circle.location);
circle1.draw();

//constructor functions
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw constructor function");
  };
}

const c = new Circle(1);
console.log(c.radius);
c.draw();

//when we use the new operator three things happen
//01)new operator first creates an empty object ex:= const x = {}
//02)then 'this' is pointed to that object
//03)and finally that object will be returned from Circle function

//dynamic nature of objects
const circle3 = {
  radius: 34,
};

circle3.color = "yellow";

console.log(circle3);

//delete properties of an object
delete circle3.color;

console.log(circle3);

//constructor property
//every object in js has a property called constructor.that references the function that was used to
//construct or create that object.

let x = {};

//javascript object will translate this to something like this.
// let x = new Object()

//-------------------------------------------------------------------------------------------------------------------------------------

//functions are objects
//every object in javascript has a constructor property and that references a function
//that was used to create an object.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw now fast!");
  };
}

const another = new Circle(2);

//when we declare a function using this syntax internally js engine will use
// f Function(){ [native code] } this function constructor to create this object.

//when we declare a function internally it is represented like this
const circleX = new Function(
  "radius",
  `
this.radius = radius
this.draw = function(){
    console.log('draw now fast!')
}
`
);

const circle2 = new circleX(3);
console.log(circle2);
console.log(circle2.radius);
