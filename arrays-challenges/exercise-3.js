//                                               Except

const numbers = [1, 2, 3, 4, 5, 2, 1, 3, 1, 6, 7, 2];
const output = except(numbers, [1, 2, 3, 4]);

console.log(output);


function except(array, excluded) {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
}