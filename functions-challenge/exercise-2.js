//                                Area Of Circle

const circle = {
  radius: 3,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area);