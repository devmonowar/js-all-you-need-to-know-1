function mixin(targer, ...sources) {
  Object.assign(targer.prototype, ...sources);
}

var canEat = {
  eat: function () {
    return `${this.name} Can Eat`;
  },
};

var canWalk = {
  walk: function () {
    return `${this.name} Can Walk`;
  },
};

var canSwim = {
  swim: function () {
    return `${this.name} Can Swim`;
  },
};

// Sakib
function Sakib(name) {
  this.name = name;
}
mixin(Sakib, canEat, canWalk);
var printSakib = new Sakib('Sakib');
console.log(printSakib.eat());

// Fish
function Fish(name) {
  this.name = name;
}
mixin(Fish, canEat, canSwim);
var printRupchanda = new Fish('Rupchanda');
console.log(printRupchanda.swim());
