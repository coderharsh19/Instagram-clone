import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "netflix-clone-b9313.firebaseapp.com",
  projectId: "netflix-clone-b9313",
  storageBucket: "netflix-clone-b9313.appspot.com",
  messagingSenderId: "994917420676",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

export { auth, db, storage, storageRef };
