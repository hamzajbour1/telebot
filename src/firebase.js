import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCyZ5jjbRePgmVsvIbRIfrNrMel7tsmSjY",
  authDomain: "telegrambot-63471.firebaseapp.com",
  databaseURL: "https://telegrambot-63471-default-rtdb.firebaseio.com",
  projectId: "telegrambot-63471",
  storageBucket: "telegrambot-63471.firebasestorage.app",
  messagingSenderId: "301943560381",
  appId: "1:301943560381:web:fa07bd6572dfde28243fd4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
