var CreateRect = function (width, height) {
  this.width = width;
  this.height = height;
};

CreateRect.prototype = {
  draw: function () {
    return 'Width is ' + this.width + ' And ' + 'Height is ' + this.height;
  },
};

var rect1 = new CreateRect(5, 10).draw();
console.log(rect1);

var rect2 = new CreateRect(50, 100).draw();
console.log(rect2);
