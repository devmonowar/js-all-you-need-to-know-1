class CreateRect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    return 'Width is ' + this.width + ' And ' + 'Height is ' + this.height;
  }

  static iAmStaticMethod() {
    return `I am Static Method. I don't know 'This' Keyword`;
  }
}

let rect1 = new CreateRect(5, 10).draw();
console.log(rect1);

// We can call static method without new keywords
console.log(CreateRect.iAmStaticMethod());
