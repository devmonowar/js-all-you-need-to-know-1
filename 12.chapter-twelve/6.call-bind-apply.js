var obj = {
  a: 10,
  b: 10,
};

function myFunc(c, d) {
  console.log(this.a + this.b + c + d);
}

myFunc.call(obj, 10, 10);
myFunc.apply(obj, [10, 10]);

var testBind1 = myFunc.bind(obj, 10, 10);
testBind1();

var testBind2 = myFunc.bind(obj);
testBind2(10, 10);
