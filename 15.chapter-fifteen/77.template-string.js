var name = 'Faysal';
var str = `My name is ${name}`;

var age = 18;
var aboutMe = `My age is ${age} and I am ${age <= 17 ? 'not' : ''} Adult`;
console.log(aboutMe);

console.log(name.padStart(15, '*'));
console.log(name.padEnd(15, 'a'));
console.log(name.repeat(15));
