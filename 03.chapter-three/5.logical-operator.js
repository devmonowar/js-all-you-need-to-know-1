// Logical And &&
console.log(true && true);
console.log(true && false);
console.log(false && false);

if (20 > 10 && 10 > 20) {
  console.log('All condition is true');
} else {
  console.log('At least 1 condition is false');
}

// Logical OR ||
console.log(true || true);
console.log(true || false);
console.log(false || false);

if (20 > 10 || 10 > 20) {
  console.log('At least 1 condition is True');
} else {
  console.log('At condition is false');
}

// Logical Not !
console.log(!true);
console.log(!false);

var num = 20;
if (!isNaN(num)) {
  console.log("Yes it's a Number");
} else {
  console.log('Not a number');
}
