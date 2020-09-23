const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCSSe12Jk4ktd_tS1joyjGtETx7fp4jXlY",
    authDomain: "a-card-repository.firebaseapp.com",
    databaseURL: "https://a-card-repository.firebaseio.com",
    projectId: "a-card-repository",
    storageBucket: "a-card-repository.appspot.com",
    messagingSenderId: "741625922262",
    appId: "1:741625922262:web:bfe60969f99b846055bf77",
    measurementId: "G-9N1D8L5B2M",
});

var db = firebase.firestore();

var cards = require("../static/cards.json");

cards.forEach(function (obj) {
    db.collection("cards").add({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        imageUrl: obj.price,
        type: obj.type
    }).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
});