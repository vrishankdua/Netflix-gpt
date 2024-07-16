// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp17bpjFGGYeOF8dbcVtnWKbVcwMzBdtM",
  authDomain: "netflix-gpt-40c6a.firebaseapp.com",
  projectId: "netflix-gpt-40c6a",
  storageBucket: "netflix-gpt-40c6a.appspot.com",
  messagingSenderId: "885902751215",
  appId: "1:885902751215:web:33140eab16e8eb2f04f21a",
  measurementId: "G-0Q2NZ8X0J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();