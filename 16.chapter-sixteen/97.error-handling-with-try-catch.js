function makeWord(text) {
  try {
    let str = text.trim();
    let word = str.split(' ');
    return word;
  } catch (error) {
    return 'Please Provide a Valid Text';
  }
}

console.log(makeWord(96));
console.log(makeWord('I am Faysal'));
