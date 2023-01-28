const firebaseConfig = {
    apiKey: "AIzaSyCb64CB3nGV--0RzL6IqVUwUbi_sO2YMu8",
    authDomain: "lappy-49af7.firebaseapp.com",
    databaseURL: "https://lappy-49af7-default-rtdb.firebaseio.com",
    projectId: "lappy-49af7",
    storageBucket: "lappy-49af7.appspot.com",
    messagingSenderId: "539435147864",
    appId: "1:539435147864:web:06a3b99217b0f9eedb602d",
    measurementId: "G-KWGG3R3C6T"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
  const auth = firebase.auth()
  const database = firebase.database()
  
  // Set up our register function
  function submit() {
    // Get all our input fields
    email = document.getElementById('email').value
    name = document.getElementById('name').value
    message = document.getElementById('message').value
    
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
    if (validate_field(name) == false || validate_field(message) == false ) {
      alert('One or More Extra Fields is Outta Line!!')
      return
    }
   
    // Move on with Auth
    auth.createUserWithNameAndEmail(name,email)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email,
        name : name,
        message : message,
       
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
 
  
      
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }