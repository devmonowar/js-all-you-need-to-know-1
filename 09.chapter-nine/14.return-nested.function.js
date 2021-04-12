function greet(msg) {
  return function (name) {
    return msg + ', ' + name + '!';
  };
}

var gm = greet('Good Morning');
var gn = greet('Good Night');

console.log(gm('Faysal'));
console.log(gn('Faysal'));
