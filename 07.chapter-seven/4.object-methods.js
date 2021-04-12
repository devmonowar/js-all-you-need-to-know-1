var obj = { a: 10, b: 20 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Clone an obj
var obj2 = Object.assign({}, obj);
obj2.a = 5;
console.log(obj2);

console.log(obj);
