var num1 = 20;
var num2 = 20;

if (num1 === num2) {
  console.log('They are equal');
} else if (num1 > num2) {
  console.log('Num1 is greater than Num2');
} else {
  console.log('Num2 is greater than Num1');
}

var date = new Date();
var dayOfWeek = date.getDay();

if (dayOfWeek === 0) {
  console.log('Today is Sunday');
} else if (dayOfWeek === 1) {
  console.log('Today is Monday');
} else if (dayOfWeek === 2) {
  console.log('Today is Tuesday');
} else if (dayOfWeek === 3) {
  console.log('Today is Wednesday');
} else if (dayOfWeek === 4) {
  console.log('Today is Thursday');
} else if (dayOfWeek === 5) {
  console.log('Today is Friday');
} else if (dayOfWeek === 6) {
  console.log('Today is Saturday');
}
