import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCxeephm3GP9Ux21RKyoMse903230g-9MI",
    authDomain: "invoice-app-gh.firebaseapp.com",
    projectId: "invoice-app-gh",
    storageBucket: "invoice-app-gh.appspot.com",
    messagingSenderId: "314795372105",
    appId: "1:314795372105:web:2c40888687b7b19a41d998"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();