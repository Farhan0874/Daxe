// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsCQuBUpcsPWuJZ9SUlq1KwS5K-A-vHbQ",
  authDomain: "fir-auth-656de.firebaseapp.com",
  projectId: "fir-auth-656de",
  storageBucket: "fir-auth-656de.appspot.com",
  messagingSenderId: "706160184169",
  appId: "1:706160184169:web:be9401aac8f7ad3717cbf8"
};

// Initialize Firebase

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} 

const auth = firebase.auth()

export { firebase };