var a = 10; // Theority te etao closure but globally howar browser etake global dhore

function myFunc1() {
  var b = 20; // eta closure because return arekta scope er vitor theke b ke neya hoise
  return function () {
    console.log(b);
  };
}

console.dir(myFunc1());
