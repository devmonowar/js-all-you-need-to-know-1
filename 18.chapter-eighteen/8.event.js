const list = document.querySelector('.list-group');
const addNewList = document.querySelector('#add-new-list');

// create element function
function createElement(tagName, className, innerHTML) {
  let tag = document.createElement(tagName);
  tag.className = className || '';
  tag.innerHTML = innerHTML || '';
  return tag;
}

// append child function
function appendChild(parent, children) {
  parent.appendChild(children);
}

// count
let count = 1;

// add new list
addNewList.addEventListener('click', function (e) {
  const listItem = createElement(
    'li',
    'list-group-item',
    `${count++} New Item`
  );
  appendChild(list, listItem);
});

// remove element
list.addEventListener('click', function (e) {
  e.target.remove();
});

// mouse move element
const box = document.querySelector('#box');
box.addEventListener('mousemove', function (e) {
  // "X" position
  const xPosition = document.querySelector('#x-position');
  xPosition.innerText = e.offsetX;

  // "Y" position
  const yPosition = document.querySelector('#y-position');
  yPosition.innerText = e.offsetY;
});
