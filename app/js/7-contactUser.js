function nextSection(userName, passWord) {
  const form = document.querySelector(".account_form");
  form.innerHTML = "";

  const firstName = document.createElement("input");
  firstName.classList.add("account_input", "account_input-first_name");
  firstName.placeholder = "First Name";

  const lastName = document.createElement("input");
  lastName.classList.add("account_input", "account_input-last_name");
  lastName.placeholder = "Last Name";

  const email = document.createElement("input");
  email.classList.add("account_input", "account_input-email");
  email.type = "email";
  email.placeholder = "eMail";

  const phone = document.createElement("input");
  phone.classList.add("account_input", "account_input-phone");
  phone.placeholder = "Phone Number";
  phone.type = "number";

  const company = document.createElement("input");
  company.classList.add("account_input", "account_input-company");
  company.placeholder = "Company";

  const submit = document.createElement("button");
  submit.innerHTML = "Submit";
  submit.classList.add("account_button", "account_input-submit");

  form.appendChild(firstName);
  form.appendChild(lastName);
  form.appendChild(email);
  form.appendChild(phone);
  form.appendChild(company);
  form.appendChild(submit);
  submitDetails(userName, passWord);
}

function submitDetails(userName, passWord) {
  const submitButton = document.querySelector(".account_input-submit");
  submitButton.addEventListener("click", () => {
    const firstName = document.querySelector(".account_input-first_name").value;
    const lastName = document.querySelector(".account_input-last_name").value;
    const eMail = document.querySelector(".account_input-email").value;
    const phone = document.querySelector(".account_input-phone").value;
    saveUser(userName, passWord, firstName, lastName, eMail, phone);
  });
}
