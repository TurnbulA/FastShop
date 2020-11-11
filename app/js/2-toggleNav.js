var buttons = document.querySelectorAll(".navBar-button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    var active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
      e.target.classList.add("active");
      loadPage(e.target.innerHTML);
    }
  });
});
