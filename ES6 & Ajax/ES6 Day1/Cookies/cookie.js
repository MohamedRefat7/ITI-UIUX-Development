const setCookie = (cookieName, cookieValue, expiryDate) => {
  let expires = "";
  if (expiryDate) {
    expires = `; expires=${expiryDate.toUTCString()}`;
  }
  document.cookie = `${cookieName}=${cookieValue};expires=${expires};`;
};

function getCookie(cookieName) {
  const firstName = `${cookieName}=`;
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(firstName) === 0) {
      return c.substring(firstName.length, c.length);
    }
  }
  return null;
}

function deleteCookie(cookieName) {
  setCookie(cookieName, "", new Date(0));
}

function hasCookie(cookieName) {
  return getCookie(cookieName) !== null;
}

function allCookies() {
  return document.cookie.split(";").map((cookie) => {
    const [name, value] = cookie.split("=");
    return [name.trim(), value];
  });
}
