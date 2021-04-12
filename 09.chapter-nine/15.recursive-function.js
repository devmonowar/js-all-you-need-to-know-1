// Factorial
function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(4));
console.log(fact(5));

// Sum of Array
var arr = [1, 2, 3, 4, 5];
function arrSum(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return arr[lastIndex] + arrSum(arr, lastIndex - 1);
}
console.log(arrSum(arr, arr.length - 1));
