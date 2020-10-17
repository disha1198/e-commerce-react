import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBxQaIZ2ZHnLJZzKq_XywEqUAgDKSCSQUc",
    authDomain: "crwn-db-84a39.firebaseapp.com",
    databaseURL: "https://crwn-db-84a39.firebaseio.com",
    projectId: "crwn-db-84a39",
    storageBucket: "crwn-db-84a39.appspot.com",
    messagingSenderId: "123007460890",
    appId: "1:123007460890:web:a41a9e4c320a8c209e93a3",
    measurementId: "G-W7HEQV4J8M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
