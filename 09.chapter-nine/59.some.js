var arr1 = [-1, -2, -3, -4, -5];
var result1 = arr1.some(function (value) {
  return value >= 0;
});
console.log(result1); // false

var arr2 = [1, -2, -3, -4, -5];
var result2 = arr2.some(function (value) {
  return value >= 0;
});
console.log(result2); // true
