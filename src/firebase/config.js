import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyByiTXvU8CTckYn-zVMKLYOVuwxYaZ-mRE",
  authDomain: "writenode-645fb.firebaseapp.com",
  projectId: "writenode-645fb",
  storageBucket: "writenode-645fb.appspot.com",
  messagingSenderId: "459479046100",
  appId: "1:459479046100:web:f2511dca74600c04ec6841"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();