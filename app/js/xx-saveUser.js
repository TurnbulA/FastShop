function saveUser(userName, passWord, firstName, lastName, eMail, phone) {
  console.log(
    `Username: ${userName},Password: ${passWord}, First name: ${firstName}, Last name: ${lastName}, eMail: ${eMail}, Phone: ${phone}`
  );
  ("use strict");
  const fs = require("fs");
  let user = {
    first: firstName,
    last: lastName,
    email: eMail,
    phone: phone,
  };
  let data = JSON.stringify(user, null, 2);
  fs.writeFile("./user.json", data, (err) => {
    if (err) throw err;
    console.log("Data Commited");
  });
  console.log("After Write");
}
