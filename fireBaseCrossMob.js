// Initialize Firebase
          var config = {
            apiKey: "AIzaSyCTpn8mJeAKmRqQtiQriC8noq35yOZ1j4g",
            authDomain: "crossmob-83688.firebaseapp.com",
            databaseURL: "https://crossmob-83688.firebaseio.com",
            storageBucket: "crossmob-83688.appspot.com",
          };
          firebase.initializeApp(config);
          addNewUser=function(email,password){
              
               firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
            });
          };
         
function writeUserData(userId, name, email) {
                  /*firebase.database().ref('users/' + userId).set({
                    username: name,
                    email: email
                  });*/

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
           alert("User is signed in.");
            firebase.database().ref().set({
                TestCross: name,
                email: email
          });
     } else {
           alert("No user is signed in."); 
     }
});
}



SignInFireBase = function (email, password){
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}