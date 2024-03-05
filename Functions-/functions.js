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

//console.log(sum(1, 2, 3, 4, 5));


//                                      The Rest Operator

function sum1(...args) {
  return args.reduce((a, b) => a + b);
}

//console.log(sum1(1, 2, 3, 4, 5, 7, 10));


//                                      Default Parameters

function interest(principle, rate = 3.5, years = 3) {
  return principle * rate / 100 * years;
}

//console.log(interest(10000));


//                                     Getters And Setters


// Getter => acces properties
// Setters => change (mutate) them

const person = {
  firstName: 'Jabu',
  lastName: 'Himo',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
person.fullName = 'Jabu Himo';
//console.log(person);


//                                       Local and Global Scope

//Local Scope

// Local scope refers to the context within which variables and functions are only accessible
// They are visible within a specific block of code, 
// typically within a function or a code block like a loop or an if statement.

//EXAMPLE
{
  const message = 'hi'  // Local variable
  console.log(message);
}



//Global Scope

// Global scope refers to the context within which variables and functions
// They are accessible or visible throughout the entire program.

//EXAMPLE

const message = 'yoo'   //   Global variable

{
  console.log(message);
}

console.log(message);