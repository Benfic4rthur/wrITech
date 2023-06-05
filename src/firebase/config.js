import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBMyL1xCUvibSUJ_CiiUT5dd45boiz7WRo",
  authDomain: "mini-blog-cc5c5.firebaseapp.com",
  projectId: "mini-blog-cc5c5",
  storageBucket: "mini-blog-cc5c5.appspot.com",
  messagingSenderId: "662572321784",
  appId: "1:662572321784:web:8d0ca2e5ab4e5301cb240d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const storage = getStorage(app);

export { db, storage };