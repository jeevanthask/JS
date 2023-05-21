function Circle(radius) {
  //Instance members
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };
}

//Prototype members
Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(2);

console.log(Object.keys(c1));
//[ 'radius', 'move' ]
//Object.keys only returns instance members

//returns all members(instance+prototype)
// for(ley key in c1){
//     console.log(key)
// }
