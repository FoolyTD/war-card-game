import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDvrRv5hp58gIIybbxKHNB9hWrQhSSs8E8",
    authDomain: "war-card-game-afe6c.firebaseapp.com",
    projectId: "war-card-game-afe6c",
    storageBucket: "war-card-game-afe6c.appspot.com",
    messagingSenderId: "866570355570",
    appId: "1:866570355570:web:4900eda43bf0884acbd3eb",
    measurementId: "G-JZBNCV14VL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;