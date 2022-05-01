// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDraM3i75-eW0oV8kkbiCj84E3PNdBapE8",
  authDomain: "spice-stoke.firebaseapp.com",
  projectId: "spice-stoke",
  storageBucket: "spice-stoke.appspot.com",
  messagingSenderId: "845466161830",
  appId: "1:845466161830:web:297fc92cdeac6a4862da67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;