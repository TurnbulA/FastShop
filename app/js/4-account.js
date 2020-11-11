function renderAccount() {
  var body = document.querySelector(".pageBody");
  body.innerHTML = ``;
  const lineBreak = document.createElement("br");
  const login = document.createElement("button");
  login.classList.add("account_button", "account_button-login");
  login.innerHTML = `Log In`;
  const register = document.createElement("button");
  register.classList.add("account_button", "account_button-register");
  register.innerHTML = "Create Account";
  body.appendChild(login);
  body.appendChild(lineBreak);
  body.appendChild(register);
  checkButton();
}

function checkButton() {
  const loginButton = document.querySelector(".account_button-login");
  const registerButton = document.querySelector(".account_button-register");
  loginButton.addEventListener("click", (e) => {
    login();
  });
  registerButton.addEventListener("click", (e) => {
    register();
  });
}
