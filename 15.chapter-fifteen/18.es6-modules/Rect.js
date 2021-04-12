// import
import Shape from './Shape.js';

// Create a Rect Shape
class CreateRect extends Shape {
  constructor(width, height) {
    super(width, height);
    this.width = width;
    this.height = height;
  }
}

let rect1 = new CreateRect(5, 10).draw();
console.log(rect1);
