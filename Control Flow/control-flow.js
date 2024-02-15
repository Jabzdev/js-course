//                                               if....else

// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!


/*
if (conditon) {
  statement
}
else if (anotherCondition) {
  statement
}
else if (yetAnotherCondition) {
  statement
}
else {
  statement
}
*/

let hour = 8;

if (hour >= 6 && hour < 12)
  console.log('Good morning!');

else if (hour >= 12 && hour < 18)
  console.log('Good afternoon!');

else {
  console.log('Good evening!');
}



//                                               Switch....case


let role;

switch (role) {
  case 'guest':
    console.log('Guest User');
    break;

  case 'moderator':
    console.log('Moderator user');
    break;
    
  default:
    console.log('Unknown User');  
}




//                                             For Loop

for (let i = 0; i < 5; i++) {
  console.log('Hello World!', i);
}

for (let q = 5; q >= 0; q--) {
  console.log('Hey!', q);
}



//                                             While Loop 

let i = 0
while (i <= 5) {
  console.log('Wassup!', i);
  i++;
}


//                                            Infinite Loop

// for (let i = 0; i > 0; i++)


//   For...in

const person = {
  name: 'Jabuu',
  age: 23
};

for (let key in person) {
  console.log(key, person[key]);
}



const colors = ['red', 'black', 'yellow', 'brown'];

for (let index in colors) {
  console.log(index, colors[index]);
}




//   For...of

for (let coloor of colors) {
  console.log(coloor);
}