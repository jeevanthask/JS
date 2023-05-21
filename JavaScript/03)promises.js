const p = new Promise((resolve, reject) => {
  //kick off some async work
  setTimeout(() => {
    // resolve(1);
    reject(new Error("null pointer exception"));
  }, 2000);
});

p.then((result) => console.log(result)).catch((err) =>
  console.log(err.message)
);
