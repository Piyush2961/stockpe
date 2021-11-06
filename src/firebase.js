import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC04T1id5u-My7CUM0GwhKjYSoxBHhJugs",
    authDomain: "otp-stockpe.firebaseapp.com",
    projectId: "otp-stockpe",
    storageBucket: "otp-stockpe.appspot.com",
    messagingSenderId: "388824211668",
    appId: "1:388824211668:web:626c4f726a587af6ec9b41"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;