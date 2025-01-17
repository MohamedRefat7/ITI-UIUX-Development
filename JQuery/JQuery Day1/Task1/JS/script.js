$(document).ready(function () {
  $("#add-item").click(function () {
    var newItem = $("#new-item").val();
    if (newItem !== "") {
      $("#todo-list").append(
        "<li>" + newItem + '<button class="remove-item"> Delete</button></li>'
      );
      $("#new-item").val("");
    }
  });

  $(document).on("click", ".remove-item", function () {
    $(this).parent().remove();
  });
});
