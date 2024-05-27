// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKgmjktwnepn4yHtY6VPl2_xbnN4jr0-4",
  authDomain: "pet-manager-aed71.firebaseapp.com",
  databaseURL: "https://pet-manager-aed71-default-rtdb.firebaseio.com",
  projectId: "pet-manager-aed71",
  storageBucket: "pet-manager-aed71.appspot.com",
  messagingSenderId: "102523277218",
  appId: "1:102523277218:web:3a9791cd86d879a2deacfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);