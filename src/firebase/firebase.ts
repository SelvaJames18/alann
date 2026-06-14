import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbjHXZoy2ZjOFp6GZLLmhUI6J-XkPyIwQ",
  authDomain: "alann-41eaf.firebaseapp.com",
  projectId: "alann-41eaf",
  storageBucket: "alann-41eaf.firebasestorage.app",
  messagingSenderId: "15076853837",
  appId: "1:15076853837:web:aad4ae052137ed6949f404",
  measurementId: "G-RKX44BMVR0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);