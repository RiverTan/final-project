function handleSignUp(){
  // step1
  var email = document.getElementById('form-email').value;
  var password = document.getElementById('form-password').value;
  // step2
  if(email.length < 4){
    alert("Pls Enter a valid email address");
    return;
  }
  if(password.length < 4){
    alert("Pls use a stonger password");
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password)
                  .then(
                    // success
                    function(){
                      alert("User Created!");
                    }
                  )
                  .catch(
                    function(error){
                      alert(error.message);
                    }
                  )
}

function handleSignIn(){
  // step1
  var email = document.getElementById('form-email').value;
  var password = document.getElementById('form-password').value;
  // step2
  firebase.auth().signInWithEmailAndPassword(email,password)
                  .then(
                    function(){
                      alert("Sign In Success!")
                      // window.location.href="https://google.com"
                    }
                  )
                  .catch(
                    function(error){
                      alert(error.message)
                    }
                  )
}

function handleSignOut(){
  // step1
  var email = document.getElementById('form-email').value;
  var password = document.getElementById('form-password').value;
  // step2
  firebase.auth().signOut()
                  .then(
                    alert("Sign Out Success!")

                  )
                  .catch(
                    function(error){
                      alert(error.message)
                    }
                  )
}


function handleFBlogin(){
  if(! firebase.auth().currentUser){
    var provider = new firebase.auth.FacebookAuthProvider();
    // provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider)
    .then(function(result){
        var token = result.credential.accessToken;
        var user = result.user;
        // console.log(user);
        // alert(user.email);
        alert("Facebook Sign In Success!")
        // window.location.href= "https://google.com";
      })
      .catch(
        function(error){
          alert(error.message)
        }
      )
  }
  else{
    handleSignOut();
  }
}
