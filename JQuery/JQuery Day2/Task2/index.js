$(document).ready(function () {
  $(window).on("scroll", function () {
    const aboutTop = $(".about").offset().top;
    const scrollTop = $(window).scrollTop();
    if (scrollTop >= aboutTop - 50) {
      $(".navbar").css("background", "blue");
    } else {
      $(".navbar").css("background", "lightgray");
    }
    if (scrollTop > 200) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  $(".scroll-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
