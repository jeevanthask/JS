//strict equality(type + value)
console.log(1 === 1); //True
console.log("1" === 1); //False

//lose equality
false || true; // true
false || "mosh"; //mosh
false || 1; //1

//falsy
undefined;
null;
0;
false;
("");
NaN;

//truthy
//anything that isn't falsy

false || 1 || 2; //1 as soon as an operand is found it is returned.this is called short circuiting
