//for a unit test u want to create a promise that is already resolved.

const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

const p1 = Promise.reject(new Error("reason for rejection..."));
p1.catch((err) => console.log(err));
