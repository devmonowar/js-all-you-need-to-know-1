var num = 0;
while (num < 10) {
  console.log(num);
  num++;
}

var isTrue = true;

while (isTrue) {
  var random = Math.floor(Math.random() * 10 + 1);
  if (random == 9) {
    console.log('Winner');
    isTrue = false;
  } else {
    console.log(random);
  }
}

var num2 = 2;
while (num2 < 2) {
  console.log(num2);
  num2++;
}
