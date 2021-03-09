var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var newArr = arr.filter(function (value, index, arr) {
  return value > 4;
});
console.log(newArr);

// Behind the scene
/*
function filter(arr, callback) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(
  filter(arr, function (value, index, arr) {
    return value > 5;
  })
);
*/
