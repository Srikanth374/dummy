// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAbmfZdHpgobkkjzbinRnlwuBVgfhrI4NU",
    authDomain: "clone-cb96e.firebaseapp.com",
    projectId: "clone-cb96e",
    storageBucket: "clone-cb96e.appspot.com",
    messagingSenderId: "830822649145",
    appId: "1:830822649145:web:0d831b139b850bf6bf6ce8",
    measurementId: "G-FCJETCNTC9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth =firebase.auth();

  export {db, auth};