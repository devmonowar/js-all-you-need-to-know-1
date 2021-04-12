// Object Destructuring
const obj = {
  name: 'Faysal',
  email: 'contact.faysalchowdhury99@gmail.com',
  address: {
    thana: 'Senbag',
    zilla: 'Noakhali',
  },
};

const {
  name,
  email,
  address: { thana: upazilla, zilla },
} = obj;

console.log(name, email, upazilla, zilla);

// Array Destructuring
const arr = [1, 2, [3, 4, 5], 6];

const [first, , [a, b, c], last] = arr;

console.log(first, a, b, c, last);
