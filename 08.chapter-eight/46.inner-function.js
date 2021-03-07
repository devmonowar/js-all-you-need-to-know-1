function hello(greet, name) {
  function getFirstName() {
    return name ? name.split(' ')[0] : '';
  }
  var msg = greet + ', ' + getFirstName();
  return msg;
}

console.log(hello('Good Morning', 'Faysal Chowdhury'));
