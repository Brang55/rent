// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs5iiR3OlrkHrCcIbkPPXmhmnVggx8L38",
  authDomain: "rent-6d797.firebaseapp.com",
  projectId: "rent-6d797",
  storageBucket: "rent-6d797.appspot.com",
  messagingSenderId: "380296807130",
  appId: "1:380296807130:web:01cc1a76456a1493681be3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
