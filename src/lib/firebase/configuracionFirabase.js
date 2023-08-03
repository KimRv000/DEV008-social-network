import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQXn4nU0mnSLYOnYiB6qXhtGDlsgK8IMk",
  authDomain: "musiclub-sn.firebaseapp.com",
  projectId: "musiclub-sn",
  storageBucket: "musiclub-sn.appspot.com",
  messagingSenderId: "752819709886",
  appId: "1:752819709886:web:2c51aad56c608e393b7bef",
  measurementId: "G-4WTX2542QZ"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const usuarioActual = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user

    const displayName = user.displayName;
    console.log(displayName);
    // ...
  } else {
    // User is signed out
    // ...
    console.log('No hay usuario');
  }
});

/*const user = auth.currentUser;
console.log(user);*/

console.log(app.name);

export const crearUsuario = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
};

export const iniciarSesion = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
};

export const accesoGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
