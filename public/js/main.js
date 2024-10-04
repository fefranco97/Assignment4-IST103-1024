/*
  CCTB Website Development
  IST105
  Oct 2024
  Description: This is a simple login website where students are asked to 
  implement Social Network Login with Firebase
*/

function authStateListener() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid
      location.href = 'listprojects.html'
    } else {
    }
  })
}

window.addEventListener('load', function () {
  authStateListener()

  document.getElementById('sign-in-button').addEventListener('click', function () {
    let provider = new firebase.auth.GoogleAuthProvider()

    provider.addScope('email')
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        console.log('Logging sucessfully', result.user)
        location.href = 'listprojects.html'
      })
      .catch(function (error) {
        console.log('Logging fail', error)
      })
  })

  document.getElementById('sign-in-2').addEventListener('click', function () {
    let emailTxt = document.getElementById('email').value
    let passtxt = document.getElementById('password').value

    firebase
      .auth()
      .signInWithEmailAndPassword(emailTxt, passtxt)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user
        // ...
        console.log('Logging sucessfully')
        alert('Logging sucessfully')
        location.href = 'listprojects.html'
      })
      .catch((error) => {
        let errorCode = error.code
        let errorMessage = error.message
        console.log('Logging fail', errorMessage)
      })
  })
})
