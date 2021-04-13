const list = document.querySelector('.list-group');

list.addEventListener('dblclick', edit);

// edit function
function edit(event) {
  if (this.contains(event.target)) {
    let innerText = event.target.innerText;
    event.target.innerHTML = '';
    let inputBox = createElement('input', 'text', 'form-control', innerText);
    appendChild(event.target, inputBox);

    update(inputBox, event);
  }
}

// update function
function update(inputBox, prevEvent) {
  inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      prevEvent.target.innerHTML = event.target.value;
    }
  });
}

// create element function
function createElement(tagName, type, className, value) {
  let tag = document.createElement(tagName);
  tag.type = type;
  tag.className = className;
  tag.value = value;
  return tag;
}

// append child function
function appendChild(parent, child) {
  parent.appendChild(child);
}
