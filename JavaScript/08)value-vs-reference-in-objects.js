//in js we have two categories of types.in one side we have value types also called primitives
//:-string,number,boolean,symbol,undefined and null
//on the other types we have reference types
//ex:-object,function and arrays

let x = 10;
let y = x;

x = 20;
console.log(x); //-\> 20
console.log(y); //-/> 10

//these are independent.

//what will happen when we use a reference type or an object here.
let x1 = { value: 10 };
let y1 = x1;

x1.value = 20;

console.log(x1); // {value:20}
console.log(y1); // {value:20}

//when we use an object that object is not stored in the x1.that object stored somewhere else in the
//memory and the address of that memory location is stored inside that variable.
//so when we copy x1 in to y1 it is address or the reference that is copied.

//primitives are copied by their value.
//objects are copied by their reference.

let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log(number); //10

//when we call increase and pass this number variable its value is copied in to
//function parameter that is local in this increase function.

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); //{value:11} because of usage of the reference
