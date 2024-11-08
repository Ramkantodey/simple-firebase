// Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChxFdMDHrcAz-rDDiXQolia7IZUqUlwNw",
    authDomain: "simple-firebase-8892f.firebaseapp.com",
    projectId: "simple-firebase-8892f",
    storageBucket: "simple-firebase-8892f.firebasestorage.app",
    messagingSenderId: "854258796460",
    appId: "1:854258796460:web:46752b8aa79962aa979c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
