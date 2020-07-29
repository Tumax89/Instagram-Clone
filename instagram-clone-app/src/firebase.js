import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCicsWuLo4mVgVNKzHjl8DmP1V-ahfr0YA",
  authDomain: "adams-instagram-clone.firebaseapp.com",
  databaseURL: "https://adams-instagram-clone.firebaseio.com",
  projectId: "adams-instagram-clone",
  storageBucket: "adams-instagram-clone.appspot.com",
  messagingSenderId: "217951114477",
  appId: "1:217951114477:web:f835ad1051b77c3e3a28e4",
  measurementId: "G-TSEVYRXDYD",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
