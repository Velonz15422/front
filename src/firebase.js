import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCpjhSl0bTzvy19b1ZugE5N8r90dujixf8",
    authDomain: "saurmo.firebaseapp.com",
    projectId: "saurmo",
    storageBucket: "saurmo.appspot.com",
    messagingSenderId: "863860017611",
    appId: "1:863860017611:web:2fa71b1e308e04051b0e4e",
    measurementId: "G-6XTRGLERYT"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const bd = firebaseapp.firestore()
  const auth = firebase.auth();

  export {auth}