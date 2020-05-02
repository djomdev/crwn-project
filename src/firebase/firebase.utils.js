import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC--tmrbUJzWzEMep85uFJY3fVioK2akBE",
    authDomain: "crwn-db-4b294.firebaseapp.com",
    databaseURL: "https://crwn-db-4b294.firebaseio.com",
    projectId: "crwn-db-4b294",
    storageBucket: "crwn-db-4b294.appspot.com",
    messagingSenderId: "159996746928",
    appId: "1:159996746928:web:ad22e28067eeb8846eaf75",
    measurementId: "G-4QRGD9EW9X"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firebaseUtil = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebaseUtil;