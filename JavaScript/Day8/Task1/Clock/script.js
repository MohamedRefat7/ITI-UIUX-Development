let intervalId;

function startClock() {
  intervalId = setInterval(() => {
    document.getElementById("clock").innerHTML =
      new Date().toLocaleTimeString();
  }, 1000);

  alert("Clock started");
  document.addEventListener("keydown", (event) => {
    if (event.altKey && event.key === "w") {
      clearInterval(intervalId);
      alert("Clock stopped");
    }
  });
}
