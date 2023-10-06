var form = document.getElementById("form");

var list = document.getElementById("list");

async function renderList() {
  try {
    const posts = await axios.get("http://localhost:4000/get/posts");
    posts.data.forEach((post) => {
      var li = document.createElement("li");
      var commentBtn = document.createElement("button");
      li.className = "posts";
      commentBtn.className = "comment btn btn-dark";
      commentBtn.id = post.id;
      commentBtn.appendChild(document.createTextNode("Comment"));
      let img = document.createElement("img");
      img.src = `${post.link}  `;
      let desc = document.createElement("span");
      desc.textContent = `User -${post.desc}  `;
      li.appendChild(img);
      li.appendChild(desc);
      li.appendChild(commentBtn);
      list.appendChild(li);
    });
  } catch (e) {
    console.log(e);
  }
}

// async function createPost() {
//   try {
//     await axios.post("http://localhost:4000/get/addPost");
//   } catch (e) {
//     console.log(e);
//   }
// }

form.addEventListener("submit", () => {
  createPost();
});
window.addEventListener("DOMContentLoaded", () => {
  renderList();
});
