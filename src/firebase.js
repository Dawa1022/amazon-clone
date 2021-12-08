// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwgy_UmEoHNgETzIgkhItrAx0HAQzeBK0",
  authDomain: "clone-811b8.firebaseapp.com",
  projectId: "clone-811b8",
  storageBucket: "clone-811b8.appspot.com",
  messagingSenderId: "905692064595",
  appId: "1:905692064595:web:b469d86dea71ecc6fb0fa6",
  measurementId: "G-SED1BJKN8K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
