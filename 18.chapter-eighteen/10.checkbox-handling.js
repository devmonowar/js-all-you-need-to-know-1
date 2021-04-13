const skill = document.getElementsByName('skill');
const skillOutput = document.querySelector('.skills-output');

const checkedSkills = [];

[...skill].forEach(function (value, index) {
  value.addEventListener('change', function (event) {
    if (event.target.checked) {
      checkedSkills.push(event.target.value);
      console.log(checkedSkills);
    } else {
      let index = checkedSkills.indexOf(event.target.value);
      checkedSkills.splice(index, 1);
      console.log(checkedSkills);
    }
  });
});
