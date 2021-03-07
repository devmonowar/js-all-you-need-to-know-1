function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(10, 20));
console.log(sum(20, 30));

// Sum of Array
var arr1 = [1, 2, 3];
var arr2 = [2, 4, 6];

function sumOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Sum of unlimited number
function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(addAll(1, 2, 3));
console.log(addAll(1, 2, 3, 5, 6, 7));
