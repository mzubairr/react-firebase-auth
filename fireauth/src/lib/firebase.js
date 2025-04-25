import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCJb5g-Ovmp-yEyrV0b639zphVtjycoiZk",
    authDomain: "react-authentication-aca88.firebaseapp.com",
    projectId: "react-authentication-aca88",
    storageBucket: "react-authentication-aca88.firebasestorage.app",
    messagingSenderId: "485396442084",
    appId: "1:485396442084:web:b4f4b764d12abe84c8f5f1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);