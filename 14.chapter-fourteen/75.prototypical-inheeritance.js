var Shape = function () {};

Shape.prototype = {
  draw: function () {
    return 'Width is ' + this.width + ' And ' + 'Height is ' + this.height;
  },
};

function mix(target, shape) {
  target.prototype = Object.create(shape.prototype);
  target.prototype.constructor = target;
}

// Create a Rect Shape
var CreateRect = function (width, height) {
  Shape.call(this);
  this.width = width;
  this.height = height;
};

mix(CreateRect, Shape);

var rect1 = new CreateRect(5, 10).draw();
console.log(rect1);

// Create a poligon Shape
var CreatePoligon = function (width, height) {
  Shape.call(this);
  this.width = width;
  this.height = height;
};

mix(CreatePoligon, Shape);

var poligon1 = new CreatePoligon(50, 50).draw();
console.log(poligon1);
