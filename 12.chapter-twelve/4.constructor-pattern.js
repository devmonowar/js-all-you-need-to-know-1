var createRect = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    return 'Width is ' + this.width + ' And ' + 'Height is ' + this.height;
  };
};

var rect1 = new createRect(5, 10).draw();
console.log(rect1);

var rect2 = new createRect(50, 100).draw();
console.log(rect2);
