import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCSSe12Jk4ktd_tS1joyjGtETx7fp4jXlY",
  authDomain: "a-card-repository.firebaseapp.com",
  databaseURL: "https://a-card-repository.firebaseio.com",
  projectId: "a-card-repository",
  storageBucket: "a-card-repository.appspot.com",
  messagingSenderId: "741625922262",
  appId: "1:741625922262:web:bfe60969f99b846055bf77",
  measurementId: "G-9N1D8L5B2M",
}

export class Firebase {
  constructor(app) {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.googleAuthProvider = new app.auth.GoogleAuthProvider()
  }

  loginWithGoogle() {
    this.auth
      .signInWithPopup(this.googleAuthProvider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        // ...
        console.log(user, token)
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      })
  }
}

let firebase

function getFirebase(app, auth, database) {
  if (!firebase) {
    firebase = new Firebase(app, auth, database)
  }

  return firebase
}

export default getFirebase
