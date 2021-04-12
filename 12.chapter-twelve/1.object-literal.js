var rect = {
  width: 100,
  height: 50,

  draw: function () {
    return 'Width is ' + this.width + ' And ' + 'Height is ' + this.height;
  },
};

console.log(rect.draw());

rect.height = 100;
console.log(rect.draw());
