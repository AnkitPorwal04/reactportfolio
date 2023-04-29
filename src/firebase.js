import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDO7KBbcTNQZgzJUgHgCamMK4Tx4Los4SY",
  authDomain: "react-portfolio-ankit.firebaseapp.com",
  projectId: "react-portfolio-ankit",
  storageBucket: "react-portfolio-ankit.appspot.com",
  messagingSenderId: "448547025653",
  appId: "1:448547025653:web:459b2651015185c6cd4bbc"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()