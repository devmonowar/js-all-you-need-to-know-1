// Async
console.log('I am Line 1');

setTimeout(() => {
  console.log('I am Line 2');
}, 3000);

setTimeout(() => {
  console.log('I am Line 3');
}, 0);

console.log('I am Line 4');

setTimeout(() => {
  console.log('I am Line 5');
}, 1000);

// Store Result From Async Function
function sayMyName(name) {
  setTimeout(() => {
    console.log(name);
  }, 5000);
}

sayMyName('Faysal');
