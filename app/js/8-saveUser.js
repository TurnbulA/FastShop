let userId = 0
function saveUser(userName, passWord, firstName, lastName, eMail, phone, company) {
  existingEntries = JSON.parse(localStorage.getItem('allUsers'));
  if(existingEntries == null) existingEntries = [];
  userId = userId +1
  var newUser = {
    key: userId,
    user: userName,
    pass: passWord,
    first: firstName,
    last: lastName,
    email: eMail,
    phoneNo: phone,
    company: company
  }  
  localStorage.setItem('newUser', JSON.stringify(newUser));
  existingEntries.push(newUser);
  localStorage.setItem('allUsers', JSON.stringify(existingEntries));
}


