// firebaseClient.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgH7Wddgu1RFXDSkYs_c5eEj-IdIpMRuE",
  authDomain: "palsiit-c7473.firebaseapp.com",
  projectId: "palsiit-c7473",
  storageBucket: "palsiit-c7473.firebasestorage.app",
  messagingSenderId: "280051887533",
  appId: "1:280051887533:web:53d392f17a7324cdb98524",
  measurementId: "G-QLHHR7714F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);