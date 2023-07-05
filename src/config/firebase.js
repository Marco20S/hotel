// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Tfo_1Djce3V0iP8ZAI7tZ6YfGSEQPng",
  authDomain: "hotel-lll.firebaseapp.com",
  projectId: "hotel-lll",
  storageBucket: "hotel-lll.appspot.com",
  messagingSenderId: "390219700022",
  appId: "1:390219700022:web:28294336fe5f81d92a0597",
  measurementId: "G-X61TZLT403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//auth for firebase
const auth = getAuth(app)
export {auth}