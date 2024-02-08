// IF STATEMENTS = if a condition is true, execute some code
//                 if not , do something else.



let age = 23;

if(age >= 18){
  console.log("You are old enough to enter this site");
}
else{
  console.log("You must be 18+ to enter this site");
}


//Nested if-satatements

let age1 = 24;
let hasLicense = true;

if(age >= 16){
  console.log("You are aold enough to drive");

  if(hasLicense){
    console.log("You have your license!");
  }
  else{
    console.log("You do not have your license yet!");
  }
}
else{
  console.log("You must be 16+ to have a license");
}

let numbers1 = 10
console.log(numbers1++);
console.log(numbers1);

let numbers2 = 10
console.log(++numbers2);
console.log(numbers2);