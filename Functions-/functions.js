//                                   Function Declarations vs Expressions

// Function Declaration
function walk() {
  console.log('walk');
}

//walk();


// function Expression
let run = function() {
  console.log('run');
};
let move = run;

//run();
//move();


//                                       Arguments


function sum(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(sum(1, 2, 3, 4, 5));