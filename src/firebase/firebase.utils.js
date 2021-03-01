import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBcTltr5y70sD-hhAjsqbH9VOx8tO6gZ5Y",
  authDomain: "crwn-db-c42a0.firebaseapp.com",
  projectId: "crwn-db-c42a0",
  storageBucket: "crwn-db-c42a0.appspot.com",
  messagingSenderId: "262660247799",
  appId: "1:262660247799:web:c7c5f5e9693f4ae38803f2",
  measurementId: "G-9HLZGKKTMK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestor = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
