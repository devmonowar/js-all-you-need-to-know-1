var rect = {
  width: 100,
  height: 50,

  thisIs: function () {
    console.log(this);
  },

  draw: function () {
    console.log(
      'Width is ' + this.width + ' And ' + 'Height is ' + this.height
    );
  },
};

rect.thisIs();
rect.draw();

// Another
var another = {
  width: 10,
  height: 10,
  print: rect.draw,
};

another.print();
