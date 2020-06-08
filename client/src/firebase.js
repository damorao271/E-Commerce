import firebase from "firebase/app";
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDm5uUIqKoSokXyJFZb54VLNC3eWKu39tE",
  authDomain: "e-commerce-fa85d.firebaseapp.com",
  databaseURL: "https://e-commerce-fa85d.firebaseio.com",
  projectId: "e-commerce-fa85d",
  storageBucket: "e-commerce-fa85d.appspot.com",
  messagingSenderId: "211066841892",
  appId: "1:211066841892:web:5da21b0b5ef9806d3321b1",
  measurementId: "G-RVYPV7CNB6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
