// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const crearUsuario =() =>{
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}