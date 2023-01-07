import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDQ0w7ZL98g6HLOg0Qr4POZ7V1qBw1_q4o",
  authDomain: "coffescom-2c1c8.firebaseapp.com",
  projectId: "coffescom-2c1c8",
  storageBucket: "coffescom-2c1c8.appspot.com",
  messagingSenderId: "689823746451",
  appId: "1:689823746451:web:d0f900003a242237184066",
  measurementId: "G-9W7GK86B1H"
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
