import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCs4RNUQUjcZBrLr6fKF7sTN4KupSIRXVY",
    authDomain: "clone-534cb.firebaseapp.com",
    databaseURL: "https://clone-534cb.firebaseio.com",
    projectId: "clone-534cb",
    storageBucket: "clone-534cb.appspot.com",
    messagingSenderId: "881919451668",
    appId: "1:881919451668:web:6049140f2d057287b03d01",
    measurementId: "G-E8WQHQGM3L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };