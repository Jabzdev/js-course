// same as Exercise 1 but returns True or False.



let answer = isLandscape(9, 7);
console.log(answer);

function isLandscape(width, height) {
  return (width > height) ? true : false;
}


//Or

let answer1 = isLandscape1 (6, 9);
console.log(answer1);

function isLandscape1 (width1, height1) {
  return (width1 > height1);
}