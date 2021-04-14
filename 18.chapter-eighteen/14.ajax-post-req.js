let form = document.getElementById('form');
let postUl = document.getElementById('post-ul');

const URL = 'https://jsonplaceholder.typicode.com/posts';

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let title = this.title.value;
  let body = this.body.value;

  if (title && body) {
    let postObj = {
      userId: 1,
      title,
      body,
    };

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON',
      },
      body: JSON.stringify(postObj),
    })
      .then((response) => response.json())
      .then((post) => {
        let postItem = createPost(post);
        postUl.appendChild(postItem);
        this.reset();
      })
      .catch((e) => console.log(e.message));
  } else {
    alert('Pleadse Provide Everything');
  }
});

// create post function
function createPost(item) {
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerHTML = `ID: ${item.id} <br/> Title: ${item.title} <br/> Description: ${item.body}`;

  return li;
}
