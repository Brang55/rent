import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEd6sLwIQz3l7swqmA6Cq2BZ8WMmiqJA8",

  authDomain: "rent-users.firebaseapp.com",

  projectId: "rent-users",

  storageBucket: "rent-users.appspot.com",

  messagingSenderId: "1028196006087",

  appId: "1:1028196006087:web:447e16b744c9c0ad6666e2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
