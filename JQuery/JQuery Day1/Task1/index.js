$(document).ready(() => {
  $.getJSON("https://jsonplaceholder.typicode.com/users", (users) => {
    users.forEach((user) => {
      $("#tabs").append(
        `<div class="tab" data-id="${user.id}">${user.username}</div>`
      );
    });
  });

  $("#tabs").on("click", ".tab", function () {
    const userId = $(this).data("id");
    $(".posts").empty();
    $.getJSON(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      (posts) => {
        posts.forEach((post) => {
          $(".posts").append(`<p>${post.title}</p>`);
        });
      }
    );
  });
});
