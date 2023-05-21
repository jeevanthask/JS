//u can't chnage an object once created.If u want a change make a copy and change it.

// let book = {};
// book.title = "ososososo"; //u can change.so js objects are not immutable.

//updating objects with immutability

// const person = {
//   name: "John",
// };

// const updated1 = Object.assign({}, person, { name: "Bob" });

//or

// const updated2 = { ...person, name: "Bob2" };

//special point to remember
const person = {
  name: "nandika jeevantha",
  address: {
    country: "USA",
    city: "San Diago",
  },
};

const updated = { ...person, name: "Bob martin" };
updated.address.city = "New York";

console.log(person); //now in here too the city is New York.Be carefull

//to solve this problem u have to do a deep copy

const updated2 = {
  ...person,
  address: {
    ...person.address,
    city: "New York",
  },
  name: "Bob",
};

console.log(person); //the original object will remain

//but this approach is somewhat verbose.there are special libraries for immutablility
