// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX1JfAbZUQybcOglI51tHeHYpfeGvjtdI",
  authDomain: "notes-redux-thunk-project.firebaseapp.com",
  projectId: "notes-redux-thunk-project",
  storageBucket: "notes-redux-thunk-project.appspot.com",
  messagingSenderId: "1059756926307",
  appId: "1:1059756926307:web:b6250aad2646e8ef1a9f56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
