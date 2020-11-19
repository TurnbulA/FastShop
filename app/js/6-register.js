function register() {
  var body = document.querySelector(".pageBody");
  body.innerHTML = ``;

  const form = document.createElement("form");
  form.classList.add("account_form");
  body.appendChild(form);
  const formBody = document.querySelector(".account_form");

  const name = document.createElement("input");
  name.classList.add("account_input", "account_input-name");
  name.setAttribute("required", true);
  name.placeholder = "User Name";

  const passFail = document.createElement("div");
  passFail.classList.add("account_input", "account_input-fail");

  const pass1 = document.createElement("input");
  pass1.classList.add("account_input", "account_input-pass");
  pass1.type = "password";
  pass1.placeholder = "Password";

  const pass2 = document.createElement("input");
  pass2.classList.add("account_input", "account_input-pass-conf");
  pass2.type = "password";
  pass2.placeholder = "Confirm Password";

  const showPass = document.createElement("button");
  showPass.innerHTML = "Show Password";
  showPass.classList.add("account_button", "account_input-pass-toggle");
  showPass.innerHTML = "Show Password";

  const move = document.createElement("button");
  move.innerHTML = "Next section";
  move.classList.add("account_button", "account_input-move-on");

  formBody.appendChild(name);
  formBody.appendChild(pass1);
  formBody.appendChild(pass2);
  formBody.appendChild(passFail);
  formBody.appendChild(showPass);
  formBody.appendChild(move);
  checkRegButtons();
}

function checkRegButtons() {
  const passToggle = document.querySelector(".account_input-pass-toggle");
  const reg = document.querySelector(".account_input-move-on");
  passToggle.addEventListener("click", () => {
    showPassToggle(passToggle);
  });
  reg.addEventListener("click", () => {
    const name = document.querySelector(".account_input-name");
    const pass = document.querySelector(".account_input-pass");
    const passCheck = document.querySelector(".account_input-pass-conf");
    const passFail = document.querySelector(".account_input-fail");

    if (pass.value === "") {
      passFail.innerHTML = "Enter A Password";
      passFail.classList.add("active");
    } else {
      if (pass.value === passCheck.value) {
        passFail.innerHTML = "";
        passFail.classList.remove("active");
        nextSection(name.value, pass.value);
      } else {
        passFail.innerHTML = "Passwords entered do not match";
        passFail.classList.add("active");
      }
    }
  });
}
