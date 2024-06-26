// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyU3QV8ozQXsIoxGPhmFIb74tOYrL48B8",
    authDomain: "react-notes-4bb88.firebaseapp.com",
    projectId: "react-notes-4bb88",
    storageBucket: "react-notes-4bb88.appspot.com",
    messagingSenderId: "75564622912",
    appId: "1:75564622912:web:ef639ef07d2b0b11da6ba5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")
