var welocmeDiv = document.getElementById("welcome");
var message = "Welcome";
var index = 0;

setInterval(() => {
  welocmeDiv.innerHTML = message.slice(0, index++);
}, 100);

setTimeout(() => window.close(), 5000);
