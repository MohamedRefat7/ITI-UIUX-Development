const gallery = document.getElementById("gallery");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slideshowButton = document.getElementById("slideshow");
const stopButton = document.getElementById("stop");

const imagesArray = [
  "./images/1.jpeg",
  "./images/2.jpeg",
  "./images/3.jpeg",
  "./images/4.jpeg",
];

let currentImageIndex = 0;
let slideshowInterval;
function showImage() {
  gallery.style.backgroundImage = `url(${imagesArray[currentImageIndex]})`;
  gallery.style.backgroundSize = "cover";
  gallery.style.backgroundPosition = "center";
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= imagesArray.length) {
    currentImageIndex = imagesArray.length - 1;
  }
  showImage();
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = 0;
  }
  showImage();
}

function nextSlideShowImage() {
  currentImageIndex++;
  if (currentImageIndex >= imagesArray.length) {
    currentImageIndex = 0;
  }
  showImage();
}

function startSlideshow() {
  slideshowInterval = setInterval(nextSlideShowImage, 3000);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
slideshowButton.addEventListener("click", startSlideshow);
stopButton.addEventListener("click", stopSlideshow);

showImage();
