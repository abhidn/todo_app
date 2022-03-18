
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({

    
        apiKey: "AIzaSyAhx0QMkcQfESjckQPDx2nvirqdymd8o8c",
        authDomain: "todo-app-cp-2f69a.firebaseapp.com",
        projectId: "todo-app-cp-2f69a",
        storageBucket: "todo-app-cp-2f69a.appspot.com",
        messagingSenderId: "288132308440",
        appId: "1:288132308440:web:4a25c3e2d85728496066ad",
        measurementId: "G-KGP1GNZ1RX"
      
});

const db = firebaseApp.firestore();

export default db;