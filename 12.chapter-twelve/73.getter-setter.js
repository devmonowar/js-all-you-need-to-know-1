var createRect = function () {
  var position = {
    x: 50,
    y: 100,
  };

  Object.defineProperty(this, 'getPosition', {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
};

var rect1 = new createRect();
rect1.getPosition = {
  x: 20,
  y: 40,
};
console.log(rect1.getPosition.x);
