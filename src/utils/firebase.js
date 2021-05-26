import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDTb3_N_f7Jcaot5TymwSt1dfnB3xrbq6A",
  authDomain: "termometro-de-tobieza.firebaseapp.com",
  projectId: "termometro-de-tobieza",
  storageBucket: "termometro-de-tobieza.appspot.com",
  messagingSenderId: "337453905956",
  appId: "1:337453905956:web:f8c316549c7c1faa1800b1",
  measurementId: "G-3NK4P3FLML"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  export {
    auth
  }