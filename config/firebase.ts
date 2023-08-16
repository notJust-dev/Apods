// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB78q3n5pUJzGybdQr1jgEPSusISg-xCYE",
  authDomain: "mytestorn-10173.firebaseapp.com",
  projectId: "mytestorn-10173",
  storageBucket: "mytestorn-10173.appspot.com",
  messagingSenderId: "530388142423",
  appId: "1:530388142423:web:5ee3ec4a6179bec8dc5612",
  measurementId: "G-N4QQ3NHWXB"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;