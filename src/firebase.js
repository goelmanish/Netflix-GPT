// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_bkYrsne_qYuVDQ9lAKt2sr9YhCbpC9A",
  authDomain: "netflixgpt-49b4e.firebaseapp.com",
  projectId: "netflixgpt-49b4e",
  storageBucket: "netflixgpt-49b4e.appspot.com",
  messagingSenderId: "160446283811",
  appId: "1:160446283811:web:5aeb03074c699b29963196",
  measurementId: "G-C5F8ZC0P7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);