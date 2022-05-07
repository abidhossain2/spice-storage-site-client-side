// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeny3RwcftGB4Eb57gw-DnQ75r5G3Y9Y0",
  authDomain: "spice-stoke-service.firebaseapp.com",
  projectId: "spice-stoke-service",
  storageBucket: "spice-stoke-service.appspot.com",
  messagingSenderId: "527664119002",
  appId: "1:527664119002:web:f765e351127181ccb3b9e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;