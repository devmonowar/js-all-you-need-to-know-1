var sum = 0;
for (var i = 2; i <= 100; i = i + 2) {
  sum += i;
  console.log(`${i} + ${sum - i} = ${sum}`);
}
