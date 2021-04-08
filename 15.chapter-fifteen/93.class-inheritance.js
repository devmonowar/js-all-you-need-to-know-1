class Shape {
  draw() {
    return 'Width is ' + this.width + ' And ' + 'Height is ' + this.height;
  }
}

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

// Create a poligon Shape
class CreatePoligon extends Shape {
  constructor(width, height) {
    super(width, height);
    this.width = width;
    this.height = height;
  }
}

let poligon1 = new CreatePoligon(50, 50).draw();
console.log(poligon1);
