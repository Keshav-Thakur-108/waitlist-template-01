import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ai-summarizer-waitlist.firebaseapp.com",
  databaseURL: "https://ai-summarizer-waitlist-default-rtdb.firebaseio.com",
  projectId: "ai-summarizer-waitlist",
  storageBucket: "ai-summarizer-waitlist.firebasestorage.app",
  messagingSenderId: "615358460328",
  appId: "1:615358460328:web:8fcbcc0df436a326a96d9d",
  measurementId: "G-9P3TV5GJR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }; // Export the database
