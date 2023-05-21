const circle = {
  radius: 7,
  draw() {
    console.log("I am draw function");
  },
};

// const another = {};

// for (let key in circle) {
//   another[key] = circle[key];
// }

//the above for loop is not very good.we have newer methods for this!

const another = Object.assign({}, circle);
const another2 = Object.assign({ name: "nandi" }, circle);

console.log(another);
another.draw();
console.log(another2);

//we can also use the spread operator
const another3 = { ...circle };
console.log("another 3", another3);

//GARBAGE COLLECTION
//JS engine has garbage collector
