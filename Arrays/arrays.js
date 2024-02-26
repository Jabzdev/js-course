//                                       Adding Elements

const numbers = [3, 4];
//console.log(numbers);


// End
numbers.push(6, 7);
//console.log(numbers);

// Beginning
numbers.unshift(1, 2);
//console.log(numbers);

// Middle
numbers.splice(4, 0, 5);
//console.log(numbers);



//                                         Removing Elements

const numbers2 = [1, 2, 3, 4, 5, 6, 7];

// End
numbers2.pop();
//console.log(numbers2);

// Beginning
numbers2.shift();
//console.log(numbers2);

// Middle
numbers2.splice(3, 1);
//console.log(numbers2);




//                                     Finding Elements (Primitives)


const numbers1 = [1, 2, 3, 1, 4];
//console.log(numbers1.indexOf('A'));
//console.log(numbers1.lastIndexOf(1));
//console.log(numbers1.indexOf(1) !== -1);
// *best way to check if it is True*
//console.log(numbers1.includes(1));



//                                    Finding Elements (Reference Types)


const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
];

const course = courses.find(function(course) {
  return course.name === 'a';
});
//console.log(course);

const course1 = courses.findIndex(function(course) {
  return course.name === 'b';
});
//console.log(course1);



//                       Emptying an Array

let numbers4 = [1, 2, 3, 4, 5];

numbers4.length = 0;
//console.log(numbers4);


//                             Combining Arrays

const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

const combined = first.concat(second);
console.log(combined);