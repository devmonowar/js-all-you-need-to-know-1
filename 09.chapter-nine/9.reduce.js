var arr = [1, 2, 3, 4, 5];

var result = arr.reduce(function (prevVal, currVal, index, arr) {
  return prevVal + currVal;
});

console.log(result);
