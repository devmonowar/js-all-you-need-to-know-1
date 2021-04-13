const skill = document.getElementsByName('skill');
const skillOutput = document.querySelector('.skills-output');
const result = document.querySelector('#result');

const checkedSkills = [];

[...skill].forEach(function (value, index) {
  value.addEventListener('change', function (event) {
    if (event.target.checked) {
      checkedSkills.push(event.target.value);
      showedSkills(result, checkedSkills);
    } else {
      let index = checkedSkills.indexOf(event.target.value);
      checkedSkills.splice(index, 1);
      showedSkills(result, checkedSkills);
    }
  });
});

function showedSkills(parent, skills) {
  let result = '';
  skills.forEach((value, index) => {
    result += `(${index + 1}) ${value} ,  `;
  });
  parent.innerHTML = result;
}
