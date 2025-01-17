document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.getElementById("tabs");
  const postsContainer = document.querySelector(".posts");
  const loader = document.getElementById("loader");

  loader.style.display = "block";

  function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((users) => {
        const tabsContainer = document.getElementById("tabs");

        setTimeout(() => {
          users.forEach((user) => {
            const tab = document.createElement("div");
            tab.className = "tab";
            tab.dataset.id = user.id;
            tab.textContent = user.username;
            tabsContainer.appendChild(tab);
          });

          loader.style.display = "none";
        }, 500);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }

  async function fetchPosts(userId) {
    loader.style.display = "block";

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const posts = await response.json();
      postsContainer.innerHTML = "";

      setTimeout(() => {
        posts.forEach((post) => {
          const postElement = document.createElement("p");
          postElement.textContent = post.title;
          postsContainer.appendChild(postElement);
        });

        loader.style.display = "none";
      }, 500);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  fetchUsers();

  tabsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("tab")) {
      const userId = event.target.dataset.id;
      fetchPosts(userId);
    }
  });
});
