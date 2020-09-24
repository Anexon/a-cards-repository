import "firebase/auth"
import "firebase/firestore"

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
    let firebase = app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.googleAuthProvider = new app.auth.GoogleAuthProvider();
    this.database = firebase.firestore();
  }

  getCards() {
    return this.database.collection("cards").get().then(snapshot => {
      let cards = [];
      snapshot.forEach(doc =>
        cards.push({
          fid: doc.id,
          ...doc.data()
        })
      );

      return cards.sort((a, b) => {
        return a.id > b.id ? 1 : -1
      });
    });
  }

  loginWithGoogle() {
    return this.auth
      .signInWithPopup(this.googleAuthProvider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user

        return {
          displayName: user.displayName
        }
      })
      .catch(function () {
      })
  }
  logOut() {
    return this.auth.signOut();
  }
}

let firebase;

function getFirebase(app, auth, database) {
  if (!firebase) {
    firebase = new Firebase(app, auth, database)
  }

  return firebase;
}

export default getFirebase;
