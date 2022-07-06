// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCs1b6ambJHCG-UtUaVrbXdindBcSY7xuU",
  authDomain: "fir-cruds-c19bb.firebaseapp.com",
  projectId: "fir-cruds-c19bb",
  storageBucket: "fir-cruds-c19bb.appspot.com",
  messagingSenderId: "261463198962",
  appId: "1:261463198962:web:b1980374e6f3cdcaabd46b",
  measurementId: "G-5F4C1G5T38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
