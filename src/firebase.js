// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBrZvGL6vJp_A7Fjc4zJmI67nHn3SxhgXo",
//   authDomain: "teacher-project-91a6d.firebaseapp.com",
//   projectId: "teacher-project-91a6d",
//   storageBucket: "teacher-project-91a6d.firebasestorage.app",
//   messagingSenderId: "641156682191",
//   appId: "1:641156682191:web:9d9faa1419ce7e9862c2ba"
// };

// const app = initializeApp(firebaseConfig);

// // ✅ Authentication
// export const auth = getAuth(app);

// // ✅ Firestore Database
// export const db = getFirestore(app);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
