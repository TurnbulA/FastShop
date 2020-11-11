function renderHome(page) {
  var body = document.querySelector(".pageBody");
  body.innerHTML = ``;
  var homeText = document.createElement("div");
  homeText.innerHTML = `Active page`;
  body.appendChild(homeText);
}
