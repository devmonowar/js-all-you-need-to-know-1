let obj = {
  start: 1,
  end: 5,

  [Symbol.iterator]: function () {
    let currentValue = this.start;
    return {
      next: () => {
        return {
          done: currentValue > this.end,
          value: currentValue > this.end ? undefined : currentValue++,
        };
      },
    };
  },
};

let iterate = obj[Symbol.iterator]();

console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

for (let i of obj) {
  console.log(i);
}
