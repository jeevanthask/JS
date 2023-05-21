function sum() {
  let total = 0;
  for (let value of arguments) {
    total = total + value;
  }

  console.log("total is ", total);
}

sum(12, 23, 34, 45, 56);

//rest operator
function calculateSum(...args) {
  console.log(args);
}

calculateSum(23, 2, 3, 4, 5);
