import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA4OU4rhwwb9jjK--FieR2LkYPkCwEJT98",
    authDomain: "sweets-house-db.firebaseapp.com",
    databaseURL: "https://sweets-house-db.firebaseio.com",
    projectId: "sweets-house-db",
    storageBucket: "sweets-house-db.appspot.com",
    messagingSenderId: "739035612600",
    appId: "1:739035612600:web:2f3659938b51fc40487b4d",
    measurementId: "G-2J1MX7M4PV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;