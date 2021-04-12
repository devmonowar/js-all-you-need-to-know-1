class CreateRect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // getter
  get getWidth() {
    return this.width;
  }

  // setter
  set setWidth(value) {
    return (this.width = value);
  }
}

let rect1 = new CreateRect(5, 10);

// Get Width
console.log(rect1.getWidth);

// Set Width
let width = (rect1.setWidth = 50);
console.log(width);

// Get With After Set
console.log(rect1.getWidth);
