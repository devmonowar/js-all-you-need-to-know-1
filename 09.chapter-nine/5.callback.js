function number(num1, num2, callback) {
  var result = callback(num1, num2);
  return result;
}

function sum(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

console.log(number(5, 5, sum));
console.log(number(5, 5, sub));
console.log(number(5, 5, mul));
console.log(number(5, 5, div));
