import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const getApp = async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyD-4krtlrVegHpdeuVAtWVEtjNhq7jnNrM",
    authDomain: "ample-stream-web.firebaseapp.com",
    projectId: "ample-stream-web",
    storageBucket: "ample-stream-web.appspot.com",
    messagingSenderId: "650832318459",
    appId: "1:650832318459:web:feeaa585aad8d332c0c55e",
    measurementId: "G-Z6N1L27DBD",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};

export const getDB = async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyD-4krtlrVegHpdeuVAtWVEtjNhq7jnNrM",
    authDomain: "ample-stream-web.firebaseapp.com",
    projectId: "ample-stream-web",
    storageBucket: "ample-stream-web.appspot.com",
    messagingSenderId: "650832318459",
    appId: "1:650832318459:web:feeaa585aad8d332c0c55e",
    measurementId: "G-Z6N1L27DBD",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getFirestore(app);
};
