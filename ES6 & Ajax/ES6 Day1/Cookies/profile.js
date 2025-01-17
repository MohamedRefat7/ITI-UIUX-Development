const username = getCookie("username");
const fontColor = getCookie("fontColor");
const gender = getCookie("gender");
let visitCount = parseInt(getCookie("visitCount") || 0);

if (!username || !fontColor || !gender) {
  location.href = "index.html";
}

visitCount += 1;
setCookie(
  "visitCount",
  visitCount,
  new Date(new Date().setFullYear(new Date().getFullYear() + 1))
);

const profilePic = gender === "male" ? "male.jpg" : "female.jpg";

document.body.innerHTML = `
      <div style="color: ${fontColor};">
          <h1>Welcome, ${username}!</h1>
          <p>You have visited this page ${visitCount} times.</p>
      </div>
      <img src="${profilePic}" alt="Profile Picture" style="width: 150px; height: 150px;">
      <br>
      <button id="logoutButton" style="background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;">Logout</button>`;

document.getElementById("logoutButton").addEventListener("click", () => {
  deleteCookie("username");
  deleteCookie("age");
  deleteCookie("fontColor");
  deleteCookie("gender");
  deleteCookie("visitCount");
  location.href = "index.html";
});
