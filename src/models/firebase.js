// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyJVlpotUcfw4y8AsIv0HAVKZeqFQeI_s",
  authDomain: "node-api-rest-diego-coria.firebaseapp.com",
  projectId: "node-api-rest-diego-coria",
  storageBucket: "node-api-rest-diego-coria.firebasestorage.app",
  messagingSenderId: "134729754730",
  appId: "1:134729754730:web:6cf5004d50884d64dd0213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize Firestore
const db = getFirestore(app);

export{db};