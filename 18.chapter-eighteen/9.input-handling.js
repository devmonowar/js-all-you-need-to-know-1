const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const typedName = document.querySelector('#typed-name');

// onsubmit
// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   if (nameInput.value.trim() === '') {
//     alert('Type your name');
//   } else {
//     typedName.innerText = `Your name is: ${nameInput.value}`;
//     nameInput.value = '';
//   }
// });

// onkeyup
nameInput.addEventListener('keyup', function (event) {
  if (nameInput.value.trim() !== '') {
    typedName.innerText = `Your name is: ${nameInput.value}`;
  } else {
    typedName.innerText = '';
  }
});
