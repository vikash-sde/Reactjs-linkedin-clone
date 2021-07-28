import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlUXtTThvdu7j8shA8z0AxYXj0zkciHnM",
  authDomain: "linkedin-clone-88d88.firebaseapp.com",
  projectId: "linkedin-clone-88d88",
  storageBucket: "linkedin-clone-88d88.appspot.com",
  messagingSenderId: "479464257119",
  appId: "1:479464257119:web:317fb964f54ee9b3824dea",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
