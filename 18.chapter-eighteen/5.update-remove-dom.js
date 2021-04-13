const list = document.querySelector('.list-group');
const firstChild = list.firstElementChild;
const lastChild = list.lastElementChild;

setTimeout(() => {
  firstChild.innerText += ' (Modified)';
  firstChild.style.cssText = `background: purple`;
  firstChild.classList.add('text-white');
}, 5000);

setTimeout(() => {
  lastChild.remove();
}, 3000);
