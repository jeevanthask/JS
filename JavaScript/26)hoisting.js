//we can call a function using the function declartion syntax before its defenition.

walk(); //we can not do this in function expressions

function walk() {}

//what is the reason?

//js engine executes this code it moves all the function declartions to the top.
//this is what we call => hoisting!!
