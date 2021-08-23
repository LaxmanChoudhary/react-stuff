import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3310P_ffv62XO8aL_Od15GPU3JDcF6cQ",
  authDomain: "apione-8a4f9.firebaseapp.com",
  projectId: "apione-8a4f9",
};

const app = firebase.initializeApp(firebaseConfig);

const dbStore = firebase.firestore(app);

export { dbStore };
