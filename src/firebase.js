import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9HiyA_lgjcQk0VhdszMxkcGE9H8lxG8s",
    authDomain: "linkedin-clone-18466.firebaseapp.com",
    projectId: "linkedin-clone-18466",
    storageBucket: "linkedin-clone-18466.appspot.com",
    messagingSenderId: "383461152789",
    appId: "1:383461152789:web:172b96ade85d39dbebd61c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export {db ,auth};