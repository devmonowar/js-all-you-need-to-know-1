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
      if (element.value.trim() === '') {
        // Validation
        goodFeedback('d-none', 'd-block');
        errorFeedback('d-block', 'd-none');
      } else {
        // set data
        data[element.name] = element.value;
        // Validation
        goodFeedback('d-block', 'd-none');
        errorFeedback('d-none', 'd-block');
      }
    }
  });
  // log data
  console.log(data);
  // reset inputs
  this.reset();
});

// good feedback function
function goodFeedback(addClass, removeClass) {
  document.querySelectorAll('.good-feedback').forEach((value) => {
    value.classList.add(addClass);
    value.classList.remove(removeClass);
  });
}

// error feedback function
function errorFeedback(addClass, removeClass) {
  document.querySelectorAll('.error-feedback').forEach((value) => {
    value.classList.add(addClass);
    value.classList.remove(removeClass);
  });
}
