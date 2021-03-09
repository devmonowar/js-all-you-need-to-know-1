var arr = [1, 2, 3, 4, 5];

var result1 = arr.find(function (value) {
  return value > 3;
});
console.log(result1);

var result2 = arr.findIndex(function (value) {
  return value > 3;
});
console.log(result2);
