var obj = { a: 10, b: 20 };

console.log('a' in obj);
console.log('c' in obj);

for (var item in obj) {
  console.log(item);
  console.log(obj[item]);
}
