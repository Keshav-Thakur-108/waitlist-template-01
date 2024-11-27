import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
require('dotenv').config();

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,  
  apiKey: process.env.API_KEY,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }; // Export the database
