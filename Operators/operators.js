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

//            Strict Equality

console.log(1 === 1);     //output True
console.log('1' === 1);   //output False

//            Lose Equality

console.log(1 == 1);     //output True
console.log('1' == 1);   //output True


//                                                    Ternary Operators


// If acustomer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//                                                    Logical Operators

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true);

// Logical OR (||)
// Returns TRUE if one  of the operands is TRUE
let highIncome = false;
let goodCreditScore = true;
let eligibleForloan = highIncome || goodCreditScore;
console.log(eligibleForloan);

// NOT (!)
let applicationRefused = !eligibleForloan;
console.log(`Application refused: ${applicationRefused}`);




// Flasy values (false):

// undefined
// null
// 0
// false
// ''
// NaN

//  Anything that is not Falsy  -> Truthy





//                                              Operators Precedence

let j = (2 +3) * 4;
console.log(j);



// Swapping Variables

let m = "red";
let n = "blue";


let o = m;
m = n;
n = o;

console.log(m);
console.log(n);
