import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsIqz5qO8GklNUUhGXSg-hT9Qq6wcVleU",
  authDomain: "namka-recipe-app.firebaseapp.com",
  projectId: "namka-recipe-app",
  storageBucket: "namka-recipe-app.appspot.com",
  messagingSenderId: "1046023580075",
  appId: "1:1046023580075:web:100a7eb7f10ec21a194aee",
  measurementId: "G-CL3MNL981P"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const analytics = getAnalytics(app);


export { db }