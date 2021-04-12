var arr1 = [1, 2, 3, 4, 5];
var result1 = arr1.every(function (value) {
  return value >= 0;
});
console.log(result1); // true

var arr2 = [1, 2, 3, 4, 5, -6];
var result2 = arr2.every(function (value) {
  return value >= 0;
});
console.log(result2); // false
