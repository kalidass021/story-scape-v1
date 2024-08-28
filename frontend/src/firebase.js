// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'story-scape-101d3.firebaseapp.com',
  projectId: 'story-scape-101d3',
  storageBucket: 'story-scape-101d3.appspot.com',
  messagingSenderId: '110271976241',
  appId: '1:110271976241:web:4fb1c33868bf07c4029610',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
