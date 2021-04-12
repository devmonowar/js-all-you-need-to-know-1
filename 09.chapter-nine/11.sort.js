// Without Callback and positive values (Default vabei Choto Theke Boro)
var arr1 = [2, 4, 3, 6, 5, 9, 1];
arr1.sort();
console.log(arr1);

// With Callback (Choto Theke Boro)
var arr2 = [1, 2, 7, -3, -5, 9, -1];
arr2.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr2);

//With Callback (Boro Theke Choto)
var arr3 = [1, 2, 7, -3, -5, 9, -1];
arr3.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arr3);

// With Callback sort an Object (Age)
var arr4 = [
  { name: 'A', age: 18 },
  { name: 'B', age: 15 },
  { name: 'C', age: 20 },
  { name: 'D', age: 14 },
];
arr4.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr4);
