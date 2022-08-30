// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhvqvCuOLBAlIrSlfDdiocZna76OCRsNc",
  authDomain: "house-marketplace-app-4b005.firebaseapp.com",
  projectId: "house-marketplace-app-4b005",
  storageBucket: "house-marketplace-app-4b005.appspot.com",
  messagingSenderId: "966546354207",
  appId: "1:966546354207:web:17f8bd4b64737a2386e52a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();