// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Constants from "expo-constants";
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp_u3MrlZLwyD6FmR2DRZ_mxbNLwYan9M",
  authDomain: "sticker-3e098.firebaseapp.com",
  projectId: "sticker-3e098",
  storageBucket: "sticker-3e098.appspot.com",
  messagingSenderId: "973267278967",
  appId: "1:973267278967:web:5abfe38283c4a124bbfa72",
  measurementId: "G-2XM9RBTB9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;
