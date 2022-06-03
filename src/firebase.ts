import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBNQxmmLbWAtmzNWHMp-mzzHxTk4aKHVV8",
    authDomain: "where-s-asterix.firebaseapp.com",
    projectId: "where-s-asterix",
    storageBucket: "where-s-asterix.appspot.com",
    messagingSenderId: "1096770401642",
    appId: "1:1096770401642:web:4405772a029324928d2113"    
}


firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firestore;