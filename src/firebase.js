import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseSettings = {
  apiKey: "AIzaSyDQPBPUyxVryzU6ky6k7llnI1ZBc0EzhN8",
  authDomain: "gympact-5a813.firebaseapp.com",
  databaseURL: "https://gympact-5a813-default-rtdb.firebaseio.com/",
  projectId: "gympact-5a813",
  storageBucket: "gympact-5a813.appspot.com",
  messagingSenderId: "724423355262",
  appId: "1:724423355262:web:d3b92c9d5dd987a4b4212f",
};

let app = !firebase.apps.length
  ? firebase.initializeApp(firebaseSettings)
  : firebase.app();

const firestore = app.firestore();

export const database = {
  exercises: firestore.collection("exercises"),
  workouts: firestore.collection("workouts"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default app;
