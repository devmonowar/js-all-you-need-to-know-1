let load = document.getElementById('load-post');
let postUl = document.getElementById('post-ul');

const URL = 'https://jsonplaceholder.typicode.com/posts';

load.addEventListener('click', function () {
  fetch(URL)
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        let listItem = createPost(post);
        postUl.appendChild(listItem);
      });
    })
    .catch((e) => console.log(e.message));
});

// create post function
function createPost(item) {
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerHTML = item.title;

  return li;
}
