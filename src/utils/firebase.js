// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXFhMRpFbtGFZEYpJA1VxaLNSmSZWyvRk",
  authDomain: "netflixgpt-2d313.firebaseapp.com",
  projectId: "netflixgpt-2d313",
  storageBucket: "netflixgpt-2d313.appspot.com",
  messagingSenderId: "84834243188",
  appId: "1:84834243188:web:b784538e36ea30ea043721",
  measurementId: "G-73VSLKNTFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();