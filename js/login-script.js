document.ready(function() {
  $('#login-form').submit(function(event) {
    event.preventdefault();
    var fName = $("#firstname-id").val();
    var lName = $("#lastname-id").val();
    var phone = $("#phone-id").val();
    var email = $("#email-id").val();
    var password = $("#password-id").val();

    // storing input from sign_up-form
    function store() {
      localStorage.setItem('fName', firstname.value);
      localStorage.setItem('lName', lastname.value);
      localStorage.setItem('email', email.value);
      localStorage.setItem('password', password.value);
      localStorage.setItem('phone', phone.value);

    }

    // check if stored data from sign_up-form is equal to entered data in the login-form
    function check() {

      // stored data from the sign_up-form
      var storedfName = localStorage.getItem('firstname');
      var storedlName = localStorage.getItem('lastname');
      var storedphone = localStorage.getItem('phone');
      var storedemail = localStorage.getItem('email');
      var storedpassword = localStorage.getItem('password');

      // entered data from the login-form
      var useremail = document.getElementById('useremail');
      var userpassword = document.getElementById('userpassword');

      // check if stored data from sign_up-form is equal to data from login form
      if(useremail.value == storedemail && userpassword.value == storedpassword) {
        alert('You are loged in.');
    }else {
        alert('Invalid login credentials!!!');
    }
      }
    }
  });
});
