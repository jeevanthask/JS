console.log("before");
getUser(1, (user) => {
  console.log("User ", user);
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from the db....");
    callback({ id: id, username: "Mosh" });
  }, 2000);
}
