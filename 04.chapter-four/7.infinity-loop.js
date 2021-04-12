for (;;) {
  var rand = Math.floor(Math.random() * 9 + 1);
  if (rand == 9) {
    console.log('Great');
    break;
  } else {
    console.log(rand);
  }
}
