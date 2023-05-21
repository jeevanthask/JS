//function declarations
function walk() {
  console.log("I am walking..");
}

//anonymous function expressions
const run = function () {
  console.log("running with function expressions!!");
};

//named function expressions
const namerun = function namerunning() {
  console.log("Hi I am name running!!");
};

walk();
run();

namerun();

let move = run;
move();
