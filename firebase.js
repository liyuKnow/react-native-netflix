// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDLIbPkZNuKcBZYyrf9KLNI0JY_22LyZqY",
  authDomain: "netflix-node.firebaseapp.com",
  projectId: "netflix-node",
  storageBucket: "netflix-node.appspot.com",
  messagingSenderId: "329594266781",
  appId: "1:329594266781:web:4110b977f03ab2fb1f6074",
  measurementId: "G-866NLN04QJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
