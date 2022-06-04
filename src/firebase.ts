import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCmnsgBKonvCpRNQ49M07KCRRf6aNNj8Ag",
    authDomain: "test-project-28d8a.firebaseapp.com",
    projectId: "test-project-28d8a",
    storageBucket: "test-project-28d8a.appspot.com",
    messagingSenderId: "268748602651",
    appId: "1:268748602651:web:3c480612ce19fbb9a867be"
}


firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firestore;



// original key
// apiKey: "AIzaSyBNQxmmLbWAtmzNWHMp-mzzHxTk4aKHVV8",
// authDomain: "where-s-asterix.firebaseapp.com",
// projectId: "where-s-asterix",
// storageBucket: "where-s-asterix.appspot.com",
// messagingSenderId: "1096770401642",
// appId: "1:1096770401642:web:4405772a029324928d2113"   

// REMEMBER TO CHANGE LVL BACK TO LEVEL IN useLeaderBoard and useGame