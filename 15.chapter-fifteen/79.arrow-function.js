// Syntax
let myFunc = () => {
  console.log('hi');
};

myFunc();

// Arrow Function Doesn't Care About 'this
let javascript = {
  name: 'Javascript',
  libraries: ['React', 'Vue', 'Angular'],
  printLibraries: function () {
    this.libraries.forEach((a) => {
      console.log(`${this.name} loves ${a}`);
    });
  },
};

javascript.printLibraries();
