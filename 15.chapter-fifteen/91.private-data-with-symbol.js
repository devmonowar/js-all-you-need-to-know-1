const _width = Symbol();
const _height = Symbol();

class CreateRect {
  constructor(width, height) {
    this[_width] = width;
    this[_height] = height;
  }
}

let rect1 = new CreateRect(5, 10);
console.log(rect1.width);
