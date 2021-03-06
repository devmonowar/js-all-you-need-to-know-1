var arr = [1, 9, 3, 2, 5, 8, 6, 9, 12];

var arrLength = arr.length;

var sum = 0;
for (var i = 0; i < arrLength; i++) {
  console.log(arr[i]);
  console.log(arr[i] + 2);

  //   Sum
  sum += arr[i];
  console.log(sum);

  //   Even or Odd Check
  if (arr[i] % 2 === 0) {
    console.log('Even ' + arr[i]);
  } else {
    console.log('Odd ' + arr[i]);
  }
}

console.log(sum);
