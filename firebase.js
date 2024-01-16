import { initializeApp } from "firebase/app";
import { collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "note-app-d2b3f.firebaseapp.com",
  projectId: "note-app-d2b3f",
  storageBucket: "note-app-d2b3f.appspot.com",
  messagingSenderId: "797814870802",
  appId: "1:797814870802:web:afcec2a28ca2e11f8a59cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")