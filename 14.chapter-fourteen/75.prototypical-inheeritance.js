var Shape = function (width, height) {
  this.width = width;
  this.height = height;
};

Shape.prototype = {
  draw: function () {
    return 'Width is ' + this.width + ' And ' + 'Height is ' + this.height;
  },
};

// Create a Rect Shape
var CreateRect = function (width, height) {
  Shape.call(this);
  this.width = width;
  this.height = height;
};

CreateRect.prototype = Object.create(Shape.prototype);
CreateRect.prototype.constructor = CreateRect;

var rect1 = new CreateRect(5, 10).draw();
console.log(rect1);

// Create a poligon Shape
var CreatePoligon = function (width, height) {
  Shape.call(this);
  this.width = width;
  this.height = height;
};

CreatePoligon.prototype = Object.create(Shape.prototype);
CreatePoligon.prototype.constructor = CreatePoligon;

var poligon1 = new CreatePoligon(50, 50).draw();
console.log(poligon1);
