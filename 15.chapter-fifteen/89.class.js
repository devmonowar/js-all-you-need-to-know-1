class CreateRect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    return 'Width is ' + this.width + ' And ' + 'Height is ' + this.height;
  }
}

let rect1 = new CreateRect(5, 10).draw();
console.log(rect1);

let rect2 = new CreateRect(50, 100).draw();
console.log(rect2);
