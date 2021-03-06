var arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

arr.push(7);
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(3, 0, 33, 44);
console.log(arr);

arr.splice(3, 2);
console.log(arr);

arr.splice(2, 1, 33);
console.log(arr);
