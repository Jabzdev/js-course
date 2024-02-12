//                                         types of operators:
//                                             Arithmetic
//                                             Assignment
//                                             Comparison
//                                             Logical
//                                             Bitwise


// Arithmetic
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment (++)
console.log(x++);
console.log(x);

// Decrement (--)
console.log(x--);
console.log(x);




// Assignment
let b = 10;
b += 5;
console.log(b);
b -= 2;
console.log(b);
b *= 2;
console.log(b);
b /= 2;
console.log(b);
b %= 5;
console.log(b);



// Comparison
let a = 1;

//Relational
console.log(a > 0);
console.log(a >= 0);
console.log(a < 0);
console.log(a <= 0);

//Equality
console.log(a === 1);
console.log(a !== 1);

//                              Strict Equality

console.log(1 === 1);     //output True
console.log('1' === 1);   //output False

//                               Lose Equality

console.log(1 == 1);     //output True
console.log('1' == 1);   //output True