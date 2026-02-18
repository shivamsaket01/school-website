import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrZvGL6vJp_A7Fjc4zJmI67nHn3SxhgXo",
  authDomain: "teacher-project-91a6d.firebaseapp.com",
  projectId: "teacher-project-91a6d",
  storageBucket: "teacher-project-91a6d.firebasestorage.app",
  messagingSenderId: "641156682191",
  appId: "1:641156682191:web:9d9faa1419ce7e9862c2ba"
};

const app = initializeApp(firebaseConfig);

// ✅ Authentication
export const auth = getAuth(app);

// ✅ Firestore Database
export const db = getFirestore(app);
