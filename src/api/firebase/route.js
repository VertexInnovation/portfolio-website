import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbKgO-zCJ4HFo--ISUxZ12cvCjYJINeKk",
  authDomain: "vertex-community.firebaseapp.com",
  databaseURL: "https://vertex-community-default-rtdb.firebaseio.com",
  projectId: "vertex-community",
  storageBucket: "vertex-community.firebasestorage.app",
  messagingSenderId: "456182409353",
  appId: "1:456182409353:web:9f550f802adf6566c1fe58",
  measurementId: "G-6KW2H5HQ13"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firebaseConfig };