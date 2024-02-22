//                                   Object-Oriented Programming (OOP)


/*
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('Draw');
  }
};
*/

//console.log(circle);
//circle.draw();



//                                         Factory Functions

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('Draw');
    }
  };
}

const circle1 = createCircle(2);
console.log(circle1);

const circle2 = createCircle(4);
console.log(circle2);



//                                     Dynamic Nature of Objects

const myCircle = {
  radius1: 2
};

myCircle.color4 = 'Pink';
myCircle.draw = function() {}

delete myCircle.color4;
delete myCircle.draw;

console.log(myCircle);

                          

//                                   Value  vs Reference Types

let x = {value: 10};
let y = x;

x.value = 30;

console.log(x); // output { value: 30 }
console.log(y);  // output { value: 30 }


//                      Enumerating Properties of an Object


const circle5 = {
  radius5: 1,
  draw() {
    console.log('draw');
  }
};


for (let key in circle5) {
  console.log(key + ':' + circle5[key]);
}

//                           Cloning an Object

const circle6 = {
  radius6: 1,
  draw() {
    console.log('draw');
  }
};

const another = Object.assign({}, circle6);
console.log(another);
// OR
const another2 = { ...circle6 };
console.log(another);