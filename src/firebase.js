import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJAvMd--mzKnJ8xnu_WcCaTDnuM3asiHs",
  authDomain: "ironcore-a945c.firebaseapp.com",
  projectId: "ironcore-a945c",
  storageBucket: "ironcore-a945c.appspot.com",
  messagingSenderId: "247249317278",
  appId: "1:247249317278:web:51fff421e8967f34c93a8f",
  measurementId: "G-WWMNCG3TRK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
