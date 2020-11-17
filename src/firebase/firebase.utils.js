import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAk6ls8fVHZsrOVKZbU0MyUVlA28ZSqMpM",
    authDomain: "phone-store-66ade.firebaseapp.com",
    databaseURL: "https://phone-store-66ade.firebaseio.com",
    projectId: "phone-store-66ade",
    storageBucket: "phone-store-66ade.appspot.com",
    messagingSenderId: "416228222018",
    appId: "1:416228222018:web:8a6607a0731fc20a29b9db",
    measurementId: "G-GRTKXMH7G8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider;
 provider.setCustomParameters({prompt: 'select_account'})
 Export const signInWithGoogle = auth.signInWithPopup(provider);
 
 export default firebase;