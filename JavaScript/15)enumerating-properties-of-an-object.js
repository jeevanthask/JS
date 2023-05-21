const circle = {
  radius: 7,
  draw() {
    console.log("I am draw function");
  },
};

for (let key in circle) {
  console.log(key, circle[key]);
}

// for (let key of circle) {
//   console.log(key);
// } //error:- circle is not iterable!

//objects are not iterable.we can not iterate objects using for of loop

//but we have the Object.keys. it returns an array.since arrays are iterable it is ok

for (let key of Object.keys(circle)) {
  console.log(key);
  console.log(Object.keys(circle));
}

console.log(Object.entries(circle)); //returns key value pairs

if ("radius" in circle) {
  console.log("yes it is in circle!!");
}
