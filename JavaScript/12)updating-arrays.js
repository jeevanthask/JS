const numbers = [1, 2, 3, 4];
const added = [4, ...numbers]; //to add element to the beginning

//but what if u want to add 4 to the number 2 position?

const index = numbers.indexOf(2);

const added2 = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

console.log(added2);

//removing
const removed = numbers.filter((n) => n !== 2);

//updating
const updated = numbers.map((c) => (c === 2 ? 20 : c));

//enforcing immutability
//libraries to enforce immutability
//immutable, immer, mori
