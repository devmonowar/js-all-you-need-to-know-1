function add(num1, num2) {
  return num1 + num2;
}

// we can store a function in a variable
var sum = add;
console.log(sum(2, 3));

// we can store a function in an array
var arr = [];
arr.push(add);
console.log(arr[0](2, 3));

// we can store a function in an object
var obj = { sum: add };
console.log(obj.sum(2, 3));

// && we can create a function anywhere
