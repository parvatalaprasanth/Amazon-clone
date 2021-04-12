// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAk6stnllb1B1hQuDtdX4BAITOhn-RePiU",
    authDomain: "clone-e46cc.firebaseapp.com",
    projectId: "clone-e46cc",
    storageBucket: "clone-e46cc.appspot.com",
    messagingSenderId: "336818669182",
    appId: "1:336818669182:web:476ccfe5e611dd857f3a2f",
    measurementId: "G-MTRM6H13SE"
  };



  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();



  export {db,auth}