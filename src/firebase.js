// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, arrayUnion } from "firebase/firestore";

async function agregarJuegoPorAño(juego, año) {
  const user = auth.currentUser;
  if (!user) {
    alert("El usuario no ha iniciado sesión.");
    return;
  }

  const ref = doc(db, "USERS", user.uid, "gamesByYear", año.toString());

  try {
    await setDoc(ref, {
      games: arrayUnion(juego)
    }, { merge: true });  // 'merge: true' conserva juegos anteriores si ya existen

    console.log(`Juego "${juego}" guardado para el año ${año}.`);
  } catch (error) {
    console.error("Error al guardar el juego:", error);
  }
}


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
const provider = new GoogleAuthProvider();

export { db, auth, provider, agregarJuegoPorAño };