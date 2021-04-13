// list
const list = document.querySelector('.list-group-item');

// Parent of list
const parentElementOfList = list.parentElement;
console.log(parentElementOfList);

// Children of list
const childrenOfList = list.children;
console.log(childrenOfList);

// Previous Sibling of list
const previousSiblingOfList = list.previousElementSibling;
console.log(previousSiblingOfList);

// Next Sibling of list
const nextSiblingOfList = list.nextElementSibling;
console.log(nextSiblingOfList);

// First Child Of Parent
const firstChildOfParent = parentElementOfList.firstElementChild;
console.log(firstChildOfParent);

// Last Child Of Parent
const lastChildOfParent = parentElementOfList.lastElementChild;
console.log(lastChildOfParent);

// Loop in HTMLCollection / NodeList
const listItem = document.querySelectorAll('li');

const listItems = [...listItem];
console.log(listItems);

listItems.forEach((value, index) => {
  value.innerHTML = `${index + 1} = ${value.innerHTML}`;
});
