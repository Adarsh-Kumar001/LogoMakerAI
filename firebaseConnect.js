// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "logomakerai.firebaseapp.com",
  projectId: "logomakerai",
  storageBucket: "logomakerai.firebasestorage.app",
  messagingSenderId: "163940664408",
  appId: "1:163940664408:web:6a2afde2d0e3e9a379362d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);