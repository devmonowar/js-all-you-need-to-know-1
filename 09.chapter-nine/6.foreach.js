var arr = [1, 2, 3, 4, 5];
var sum = 0;

arr.forEach(function (value, index, array) {
  //   console.log(value, index, array);
  sum += value;
});
console.log(sum);

// Behind the scene
/*
function forEach(arr, callback) {
  for (i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

forEach(arr, function (value, index, array) {
  console.log(value, index, array);
});
*/
