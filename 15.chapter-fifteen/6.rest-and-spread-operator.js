// Rest Operator
function restOperator(name, ...rest) {
  console.log(name);
  console.log(rest);
  return rest.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
}
console.log(restOperator('Faysal', 1, 2, 3, 4, 5));

// Spread Operator
// Array
let number1 = [1, 2, 3];
let number2 = [4, 5, 6];

// concat array's
let numbers = [...number1, ...number2];
console.log(numbers);

// exact copy of numbers array
let copyOfNumbers = [...numbers];
console.log(copyOfNumbers);

// Object
let obj1 = {
  a: 10,
  b: 10,
};

let obj2 = {
  x: 10,
  y: 10,
};

// concat object's
let myObj = {
  ...obj1,
  ...obj2,
};
console.log(myObj);

// exact copy of myObj object
let copyOfMyObj = { ...myObj };
console.log(copyOfMyObj);
