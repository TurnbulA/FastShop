function login() {
  var body = document.querySelector(".pageBody");
  body.innerHTML = ``;
  const form = document.createElement("form");
  form.classList.add("account_form");
  body.appendChild(form);
  formBody = document.querySelector(".account_form");

  const name = document.createElement("input");
  name.classList.add("account_input", "account_input-name");
  name.placeholder = "User Name";

  const pass = document.createElement("input");
  pass.classList.add("account_input", "account_input-pass");
  pass.placeholder = "Password";
  pass.type = "password";

  const showPass = document.createElement("button");
  showPass.innerHTML = "Show Password";
  showPass.classList.add("account_button", "account_input-pass-toggle");
  showPass.innerHTML = "Show Password";

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.classList.add("account_button", "account_input-submit");

  submit.innerHTML = "Log In";
  formBody.appendChild(name);
  formBody.appendChild(pass);
  formBody.appendChild(showPass);
  formBody.appendChild(submit);
  checkLoginButtons();
}

function checkLoginButtons() {
  const passToggle = document.querySelector(".account_input-pass-toggle");
  const logIn = document.querySelector(".account_input-submit");
  passToggle.addEventListener("click", () => {
    showPassToggle(passToggle);
  });
}

function showPassToggle(toggleButton) {
  const password = document.querySelector(".account_input-pass");
  const passCheck = document.querySelector(".account_input-pass-conf");
  if (password.type === "password") {
    toggleButton.classList.add("activeToggle");
    password.type = "text";
  } else {
    toggleButton.classList.remove("activeToggle");
    password.type = "password";
  }
  if (passCheck.type === "password") {
    toggleButton.classList.add("activeToggle");
    passCheck.type = "text";
  } else {
    toggleButton.classList.remove("activeToggle");
    passCheck.type = "password";
  }
}
