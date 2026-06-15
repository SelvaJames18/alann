import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNrsEXhUwmn6X7h0RTn0b0XtB48Utz6hc",
  authDomain: "developer-59665.firebaseapp.com",
  projectId: "developer-59665",
  storageBucket: "developer-59665.firebasestorage.app",
  messagingSenderId: "618967893975",
  appId: "1:618967893975:web:2584e288dd591d5046ed92",
  measurementId: "G-VSCCFGB3V9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);