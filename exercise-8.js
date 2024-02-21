//                                       Sums of Multiples of 3 and 5

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0  || i % 5 === 0) {
      sum += i
    }
  }
  return sum;
}

const answer = sum(10);
console.log(answer);