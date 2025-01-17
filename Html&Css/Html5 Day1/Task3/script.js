let currentAudio = document.getElementById("Interstellar");
const img = document.getElementById("img");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

function selectTrack(trackId) {
  currentAudio.pause();
  currentAudio.currentTime = 0;

  currentAudio = document.getElementById(trackId);
  const trackImg = document.querySelector(`#${trackId}Track img`).src;
  img.src = trackImg;

  document
    .querySelectorAll(".track")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById(`${trackId}Track`).classList.add("active");

  playAudio();
}

function playAudio() {
  currentAudio.play();
}

function pauseAudio() {
  currentAudio.pause();
}

function stopAudio() {
  currentAudio.load();
  currentAudio.pause();
  currentAudio.currentTime = 0;
}

function changeTime() {
  currentAudio.currentTime = time.value;
}

function changeVol() {
  currentAudio.volume = volume.value;
}

function updateTime() {
  time.value = currentAudio.currentTime;
}

currentAudio.addEventListener("timeupdate", () => {
  time.value = currentAudio.currentTime;
});

currentAudio.addEventListener("loadedmetadata", () => {
  time.max = currentAudio.duration;
});
