var createRect = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    return 'Width is ' + this.width + ' And ' + 'Height is ' + this.height;
  };
};

function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);

  var argsArr = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArr.slice(1));

  return obj;
}

var rect = myNew(createRect, 5, 10);
console.log(rect.draw());
