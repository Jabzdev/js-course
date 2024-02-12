

let myName = 'Jabz';              // String Literal
let age = 23;                     // Number Literal
let isApproved = false;           // Boolean Literal
let firstName = undefined;        // undefined
let selectedColors = ['red', 'blue', 'black']; //Object

/*
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof firstName);
*/
console.log(selectedColors);

//                                              FUNCTIONS

// performing a task
function greet(name) {
  console.log(`Hello ${name}`);
}

greet('Jabzy');

// calculating a value
function square(number){
  return number * number;
}

let number = square(4);
console.log(number);