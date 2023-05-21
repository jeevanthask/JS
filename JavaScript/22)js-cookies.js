console.log(navigator.cookieEnabled);
document.cookie =
  "firstName = spongbob; expires = sun 1 January 2030 12:00:00 UTC; path = /";
console.log(document.cookie);
