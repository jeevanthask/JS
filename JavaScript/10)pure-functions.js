//we say a function is pure if everytime we call it and give it the same argument
//it always returns the same result.

function m1(number) {
  //this function is not pure
  return number * Math.random();
}
