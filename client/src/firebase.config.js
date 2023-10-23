// Importa las funciones que necesitas de los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Tu configuración de Firebase para la aplicación web
const firebaseConfig = {

  apiKey: "AIzaSyD1OUIkgWHOqFFGjoIHP1shtnx0pRVj9Fo",

  authDomain: "clone-levelgpt.firebaseapp.com",

  projectId: "clone-levelgpt",

  storageBucket: "clone-levelgpt.appspot.com",

  messagingSenderId: "630473730302",

  appId: "1:630473730302:web:6ee24948fe7d657b8dddaf",

  measurementId: "G-MEZPQ4D0QM"

};


// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider(); // Corregido el nombre de la variable

// Inicializa Cloud Firestore y obtén una referencia al servicio
const db = getFirestore(firebaseApp);


export { auth,  googleAuthProvider, db };
