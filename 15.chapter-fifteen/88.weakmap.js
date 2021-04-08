let a = {};
let b = {};

let wm = new WeakMap();

wm.set(a, 45);
wm.set(b, 90);

console.log(wm.has(a));

a = null;
console.log(wm.has(a));
