import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPro9SBn6xkxgyDE8-jo1MUklQe9qkVEo",
  authDomain: "e-store-92767.firebaseapp.com",
  projectId: "e-store-92767",
  storageBucket: "e-store-92767.appspot.com",
  messagingSenderId: "428871197820",
  appId: "1:428871197820:web:013c52a4ccb95c41d115f9",
  measurementId: "G-QEJ63YVZXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app);

export {auth,db}