// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth   , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";
// import {getFirestore, collection , increment, deleteField, addDoc ,doc , updateDoc ,setDoc  , getDoc , getDocs ,deleteDoc ,onSnapshot , Timestamp} from "firebase/firestore";
// import { getStorage, ref, uploadBytes ,getDownloadURL } from "firebase/storage";


// const firebaseConfig = {
//     apiKey: "AIzaSyDNOuQP5cvW6ie6_YBUaaNnhApIklSZy6k",
//     authDomain: "instagram-clone-871aa.firebaseapp.com",
//     projectId: "instagram-clone-871aa",
//     storageBucket: "instagram-clone-871aa.appspot.com",
//     messagingSenderId: "574390040874",
//     appId: "1:574390040874:web:02a50b1281cd38a8428653"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// const auth = getAuth();
// const db = getFirestore();
// const storage = getStorage();

// export {
//   auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   collection,
//   addDoc,
//   db,
//   doc,
//   setDoc,
//   getDoc,
//   getDocs,
//   storage,
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   deleteDoc,
//   Timestamp,
//   onSnapshot,
//   updateDoc,
//   increment,
//   deleteField
// }
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDNOuQP5cvW6ie6_YBUaaNnhApIklSZy6k",
  authDomain: "instagram-clone-871aa.firebaseapp.com",
  projectId: "instagram-clone-871aa",
  storageBucket: "instagram-clone-871aa.appspot.com",
  messagingSenderId: "574390040874",
  appId: "1:574390040874:web:02a50b1281cd38a8428653"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
seedDatabase(firebase)

export { firebase, FieldValue };
