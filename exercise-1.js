// Write a function that takes two numbers
// and returns the maximum of the two.

let number = max(1, 2);
console.log(number);

function max(a, b) {
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}

// Or

let number1 = max1(8, 7);
console.log(number1);

function max1 (x, y) {
  return (x > y) ? x : y; 
}


