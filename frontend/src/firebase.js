import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmmgHQDOMYZeYoGLe3WgL6KiRX2Tu1shk",
    authDomain: "blogpersonal-fabcb.firebaseapp.com",
    projectId: "blogpersonal-fabcb",
    storageBucket: "blogpersonal-fabcb.firebasestorage.app",
    messagingSenderId: "597222279342",
    appId: "1:597222279342:web:4647f22a5bd9ae7b12053f"};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);