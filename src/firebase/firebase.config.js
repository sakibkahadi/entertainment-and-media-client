// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVrdWDn3C3bYFooOfebE01FGAGn4kNZ5I",
  authDomain: "media-mingle.firebaseapp.com",
  projectId: "media-mingle",
  storageBucket: "media-mingle.appspot.com",
  messagingSenderId: "1093157260304",
  appId: "1:1093157260304:web:120022b84b9938a0030e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app