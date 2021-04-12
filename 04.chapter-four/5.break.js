while (true) {
  var random = Math.floor(Math.random() * 10 + 1);
  if (random === 1) {
    console.log('Great You Have Got ' + random);
    break;
  } else {
    console.log('You Have Got ' + random);
  }
}

for (var i = 1; i <= 10; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}
