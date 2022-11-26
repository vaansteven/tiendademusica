
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4-4LLUr6Xh4tfUL9sDyLfpyI4K2l7af0",
  authDomain: "music-mind-6e5e9.firebaseapp.com",
  projectId: "music-mind-6e5e9",
  storageBucket: "music-mind-6e5e9.appspot.com",
  messagingSenderId: "1041529160224",
  appId: "1:1041529160224:web:03249d004564e8fd9db245"
};

const app = initializeApp (firebaseConfig);
 export const db = getFirestore (app);
 export const collectionProd= collection(db,'productos');
