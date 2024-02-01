import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKNSGNxvO1ZQVV1g2M2wtMjSTRrpv2GTE",
    authDomain: "za-x-1fcf1.firebaseapp.com",
    projectId: "za-x-1fcf1",
    storageBucket: "za-x-1fcf1.appspot.com",
    messagingSenderId: "762306388996",
    appId: "1:762306388996:web:e9f4fdba011d496d5c8151"
  };
  

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
