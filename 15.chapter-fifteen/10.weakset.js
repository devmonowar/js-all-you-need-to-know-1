// WeakSet
let a = { a: 10 };
let b = { b: 20 };
let ws = new WeakSet([a, b]);

console.log(ws.has(a));

a = null;
console.log(ws.has(a));

// WeakSet Methods => add,delete,has
