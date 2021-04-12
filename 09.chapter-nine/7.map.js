var arr = [1, 2, 3, 4, 5];
var sqrArr = arr.map(function (value, index, array) {
  return value * value;
});

console.log(arr);
console.log(sqrArr);
