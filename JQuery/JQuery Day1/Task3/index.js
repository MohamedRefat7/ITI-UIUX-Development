$(document).ready(function () {
  let currentIndex = 0;
  const images = $(".gallery img");
  const lightbox = $(".lightbox");
  const lightboxImage = $(".lightbox img");

  images.on("click", function () {
    currentIndex = images.index(this);
    showImage();
    lightbox.fadeIn();
  });

  lightbox.on("click", function (e) {
    if (
      !$(e.target).is(lightboxImage) &&
      !$(e.target).is(".prev") &&
      !$(e.target).is(".next")
    ) {
      lightbox.fadeOut();
    }
  });

  $(".prev").on("click", function (e) {
    e.stopPropagation();
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    showImage();
  });

  $(".next").on("click", function (e) {
    e.stopPropagation();
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    showImage();
  });

  function showImage() {
    const imgSrc = images.eq(currentIndex).attr("src");
    lightbox.css("display", "flex");
    lightboxImage.attr("src", imgSrc);
  }
});
