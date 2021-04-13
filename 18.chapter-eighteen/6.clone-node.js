const list = document.querySelector('.list-group');
const firstChild = list.firstElementChild;

// clone first child
const lastChild = firstChild.cloneNode(true);
lastChild.setAttribute('title', 'I am Last Child');
list.appendChild(lastChild);
