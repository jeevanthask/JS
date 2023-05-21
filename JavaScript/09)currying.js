//Currying in JavaScript transforms a function with multiple arguments into a
//nested series of functions, each taking a single argument. Currying helps
//you avoid passing the same variable multiple times,
//and it helps you create a higher order function.

// function add(a, b) {
//   return a + b;
// }

//the above method can be replaced as

function add(a) {
  return function (b) {
    return a + b;
  };
}

let ans = add(1)(10);
console.log(ans);

const add2 = (a) => (b) => a + b;
let ans2 = add2(20)(20);
console.log(ans2);
