let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Elemenst
  let elements = [...this.elements];

  // store data
  let data = {};

  // traverse element
  elements.forEach((element) => {
    if (element.type !== 'submit') {
      // set data
      data[element.name] = element.value;
    }
  });

  // log data
  console.log(data);

  // reset inputs
  this.reset();
});
