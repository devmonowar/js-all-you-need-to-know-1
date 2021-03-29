var createRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      return 'Width is ' + this.width + ' And ' + 'Height is ' + this.height;
    },
  };
};

var rect1 = createRect(50, 100).draw();
console.log(rect1);

var rect2 = createRect(5, 10).draw();
console.log(rect2);

var rect3 = createRect(55, 150).draw();
console.log(rect3);
