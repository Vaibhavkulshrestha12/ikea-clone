import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDkHwR8UMmPSFA499HMP9mpMTXxu6PKfRY",
  authDomain: "ikea-clone-12711.firebaseapp.com",
  projectId: "ikea-clone-12711",
  storageBucket: "ikea-clone-12711.appspot.com",
  messagingSenderId: "357288729598",
  appId: "1:357288729598:web:6f148704bc997e78c2beaf",
  measurementId: "G-ZZ3Q2KWQR1"
})

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };