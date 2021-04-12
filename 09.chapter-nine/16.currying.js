function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var result = add(5)(10)(15);
console.log(result);
