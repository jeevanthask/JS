const numbers = [3, 4, 5];

//-----------------------------------------------------------------------------------------------
//add elements
//end
numbers.push(45, 56);

//beginning
numbers.unshift(90, 23);

//middle
//.splice(startingPosition,howManyNumbersToDelete,itemsToAdd)
numbers.splice(2, 0, "a", "b");

console.log(numbers);

//finding elements(primitives)
console.log(numbers.indexOf("a"));

//we also have lastIndexOf()

//includes()
console.log(numbers.includes(3));

//we can also include a second argument here
console.log(numbers.indexOf(4, 2)); //will start from position 2 onwards

//------------------------------------------------------------------------------------------------
//finding elements in reference types

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const rr = courses.find((c) => c.name == "av");
const indexcourse = courses.findIndex((c) => c.name == "b");
console.log(rr);
console.log(indexcourse);

//---------------------------------------------------------------------------------------------
//removing elements of an array

const array1 = [34, 23, 56, 78];

//last
const last = array1.pop();
console.log(array1);
console.log(last);

//middle
const mid = array1.splice(1, 2);
console.log(mid);
console.log(array1);

//beginning
const begin = array1.shift();
console.log(begin);
console.log(array1);

//-------------------------------------------------------------------------------------------
//emptying an array
numbers.splice(0, numbers.length);

//--------------------------------------------------------------------------------------------
//combining and slicing arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const slice = combined.slice(2, 4);
console.log(slice);

//---------------------------------------------------------------------------------------------
//iterating an array
const arr = [1, 2, 3, 4, 5, 6];

arr.forEach((c) => console.log(c));

//---------------------------------------------------------------------------------------------
//joining arrays
const arrX = [1, 2, 3, 4, 5, 6];

const joined = arrX.join(",");
console.log(joined);

const message = "This is my first word in javascript";
const splitX = message.split(" ");
console.log(splitX);
console.log(splitX.join("-"));

//----------------------------------------------------------------------------------------------
//sorting array
const courses2 = [
  { id: 1, name: "react" },
  { id: 2, name: "Angular" },
  { id: 3, name: "bb" },
];

//we have to do some extra work when working with object arrays
courses2.sort(function (a, b) {
  //a<b => -1
  //a>b => 1
  //a===b => 0

  const aName = a.name.toUpperCase();
  const bName = b.name.toUpperCase();

  if (aName < bName) return -1;
  if (aName > bName) return 1;
  return 0;
});

console.log(courses2);

//--------------------------------------------------------------------------------------------------
//Testing the elements of an array
const numArray = [1, 2, 3, 4];

const isAllPositive = numArray.every((c) => c > 0);
console.log(isAllPositive);

//at least one matches the condition
const atLeastOneNegative = numArray.some((c) => c > 0);
console.log(atLeastOneNegative);

//--------------------------------------------------------------------------------------------------
//Filtering an array
const num4 = [1, 2, 3, 4, -5, -6];

const newNum4 = num4.filter((c) => c > 0);
console.log(newNum4);

//--------------------------------------------------------------------------------------------------
//Map function
const mapNum4 = num4.map((c) => c * c);
console.log(mapNum4);

//-------------------------------------------------------------------------------------------------
//Reducing an array
const sum = num4.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; //this result will be set to accumulator
}, 0); //here 0 means the initial value for the accumulator

console.log(sum);
