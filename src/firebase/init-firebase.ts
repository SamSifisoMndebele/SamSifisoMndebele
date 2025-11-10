// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG70awcNrLNPrBUJ5LKjgXC66KhYDyyJk",
    authDomain: "sam-mndebele.firebaseapp.com",
    projectId: "sam-mndebele",
    storageBucket: "sam-mndebele.firebasestorage.app",
    messagingSenderId: "82867563641",
    appId: "1:82867563641:web:ef4234a373d56df68278a8",
    measurementId: "G-W06XL46KK9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
getAnalytics(app);
