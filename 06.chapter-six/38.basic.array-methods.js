var arr = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

// console.log(arr.join(', '));

// console.log(arr.fill('l'));

arr3 = arr.concat(arr2);
console.log(arr3);

console.log(Array.isArray(arr));

var arr4 = Array.from(arr3);
console.log(arr4);
arr3[0] = 0;
console.log(arr3);
console.log(arr4);
