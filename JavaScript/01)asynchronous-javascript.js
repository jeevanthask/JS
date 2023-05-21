//asynchronous javascript example
console.log("before");
setTimeout(() => {
  console.log("reading a user from the db...");
}, 2000);
console.log("After");

//patterns for dealing with asynchronous code
console.log("before");
const user = getUser(1); //u will get undefined here
console.log(user);
console.log("After");

function getUser(id) {
  setTimeout(() => {
    console.log("reading a data from the db...");
    return { id: id, name: "Nandika" };
  });
}

//there are three ways to deal with the asynchronous code
//01)callbacks
//02)promises
//03)async and await
