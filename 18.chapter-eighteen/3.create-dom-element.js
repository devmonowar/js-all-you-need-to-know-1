// container / parent div
const container = document.querySelector('.container');

// create element function
function createElement(tagName, className, innerText) {
  let tag = document.createElement(tagName);
  tag.className = className || '';
  tag.innerText = innerText || '';
  return tag;
}

// append child function
function append(parent, children) {
  parent.appendChild(children);
}

// create new elements
let para1 = createElement('p', 'lead my-4', 'I am para 1 from dom');
let para2 = createElement('p', 'lead my-4', 'I am para 2 from dom');

// append created elements
append(container, para1);
append(container, para2);
