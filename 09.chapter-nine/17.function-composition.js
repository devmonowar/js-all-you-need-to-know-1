function printResult(inp) {
  return inp;
}

function multiplybyFive(num) {
  return num * 5;
}

function num(num1, num2) {
  return num1 + num2;
}

var result = printResult(multiplybyFive(num(5, 3)));
console.log(result);
