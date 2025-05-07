// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDksqcliaF4KmEYaj-956-cXgEBJ5kyBlc",
  authDomain: "videogames-played-e9c99.firebaseapp.com",
  projectId: "videogames-played-e9c99",
  storageBucket: "videogames-played-e9c99.firebasestorage.app",
  messagingSenderId: "626367090216",
  appId: "1:626367090216:web:7d7b7b2debb25a7778af1d",
  measurementId: "G-58M03M8MXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Exporta Firestore
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };