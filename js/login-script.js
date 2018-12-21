function store() {
  var inputfName = document.getElementById("#fName");
  localStorage.setItem("fName", inputfName.value);
  var inputlName = document.getElementById("#lName");
  localStorage.setItem("lName", inputlName.value);
  var inputphone = document.getElementById("#phone");
  localStorage.setItem("phone", inputphone.value);
  var inputemail = document.getElementById("#email");
  localStorage.setItem("email", inputemail.value);
  var inputpassword = document.getElementById("#password");
  localStorage.setItem("password", inputpassword.value);
}
var storedemail;
var storedfname;
var storedlname;
var storedphone;
var storedpassword;
// check if stored data from sign_up-form is equal to entered data in the login-form
function check() {
  // stored data from the sign_up-form
  storedfName = localStorage.getItem('#fName');
  storedlName = localStorage.getItem('#lName');
  storedphone = localStorage.getItem('#phone');
  storedemail = localStorage.getItem('#email');
  storedpassword = localStorage.getItem('#password');
}
var useremail = document.getElementById('#email-id');
var userpassword = document.getElementById('#password-id');

// check if stored data from login form
if(useremail == storedemail && userpassword == storedpassword) {
alert('You are logged in!!!');
}
else {
  alert('Invalid login credentials!!!');
}
