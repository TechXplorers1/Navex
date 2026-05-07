// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiP1tp1fljNaApjVO6D3uJ4UtbyYNP8pY",
  authDomain: "navex-80ee1.firebaseapp.com",
  projectId: "navex-80ee1",
  storageBucket: "navex-80ee1.firebasestorage.app",
  messagingSenderId: "1097565542328",
  appId: "1:1097565542328:web:aada5d64da0227b559e14d",
  measurementId: "G-5FTY0W01VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };
