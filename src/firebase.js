import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyAw7NUiZ5AFoumpfmb--5Oe4N4ZAn8EOLo",

    authDomain: "linkedin-clone-7c279.firebaseapp.com",

    projectId: "linkedin-clone-7c279",

    storageBucket: "linkedin-clone-7c279.appspot.com",

    messagingSenderId: "637611054917",

    appId: "1:637611054917:web:1df123a2ae32e3ca49502c"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};