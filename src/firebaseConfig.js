// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3RbFvUQh3bQE_1Rdo24FUZFDeZCgQfks",
  authDomain: "blog-application-2025.firebaseapp.com",
  projectId: "blog-application-2025",
  storageBucket: "blog-application-2025.firebasestorage.app",
  messagingSenderId: "632967905192",
  appId: "1:632967905192:web:f1ee154c7d36b58adf279d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
  auth,
  db,
  googleAuthProvider
}