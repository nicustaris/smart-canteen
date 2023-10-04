import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4SJzF8Rxqqzjly5GBxyDCGi05maDooFs",
  authDomain: "solent-project-ae2.firebaseapp.com",
  projectId: "solent-project-ae2",
  storageBucket: "solent-project-ae2.appspot.com",
  messagingSenderId: "90950383110",
  appId: "1:90950383110:web:9c4aef155d8ffb6d4c7587",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signOutUser = async () => await signOut(auth);
