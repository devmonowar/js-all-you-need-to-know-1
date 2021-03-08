// Pure Function
function sqr(n) {
  return n * n;
}
console.log(sqr(2));

// Not Pure Function
var a = 0;
function b() {
  a = 10;
}
b();
console.log(a);
