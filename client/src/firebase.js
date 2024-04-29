// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f5a30.firebaseapp.com",
  projectId: "mern-blog-f5a30",
  storageBucket: "mern-blog-f5a30.appspot.com",
  messagingSenderId: "970129163008",
  appId: "1:970129163008:web:f8cf6d7055cd905adb69e5"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);