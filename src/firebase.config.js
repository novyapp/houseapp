import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQpi-Yli0FkUnkJP5PEOBwwv7meTvgsAU",
  authDomain: "xpert-academy-1579184148150.firebaseapp.com",
  databaseURL: "https://xpert-academy-1579184148150-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "xpert-academy-1579184148150",
  storageBucket: "xpert-academy-1579184148150.appspot.com",
  messagingSenderId: "1092391562215",
  appId: "1:1092391562215:web:f8a388acff1bce340a6b42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()