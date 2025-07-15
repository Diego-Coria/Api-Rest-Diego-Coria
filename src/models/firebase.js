// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Configuración de la aplicación web de Firebase, obtenida desde variables de entorno
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// inicializa Firebase
const app = initializeApp(firebaseConfig);
//inicializa Firestore
const db = getFirestore(app);

export{db};

