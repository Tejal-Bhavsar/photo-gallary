import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCYISO_gTV0aT0UTVEjeXIPz3sPFQIedKw",
    authDomain: "photo-gallary-e68cf.firebaseapp.com",
    projectId: "photo-gallary-e68cf",
    storageBucket: "photo-gallary-e68cf.appspot.com",
    messagingSenderId: "990524160958",
    appId: "1:990524160958:web:76d761c66d866af31797ef"
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig) 

const DbFirestore = firebaseApp.firestore();
const DbStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { DbFirestore, DbStorage , timestamp };