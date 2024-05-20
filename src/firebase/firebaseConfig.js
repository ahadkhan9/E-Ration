import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOszGDYv-nNLjVx-2QE-Yf4RvSbLV4sU8",
  authDomain: "e-ration-9f452.firebaseapp.com",
  projectId: "e-ration-9f452",
  storageBucket: "e-ration-9f452.appspot.com",
  messagingSenderId: "902599461657",
  appId: "1:902599461657:web:3a93732b19c581035c1388",
  measurementId: "G-V763V8M1X4"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
