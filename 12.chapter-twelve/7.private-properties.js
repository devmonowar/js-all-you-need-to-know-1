var createRect = function (width, height) {
  this.width = width;
  this.height = height;

  // Print is Private  Property
  var print = function () {
    console.log(
      'Width is ' + this.width + ' And ' + 'Height is ' + this.height
    );
  }.bind(this);

  this.draw = function () {
    print();
  };
};

var rect1 = new createRect(50, 100);
rect1.draw();
