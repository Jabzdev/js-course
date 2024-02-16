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



