import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyDv5gugxMuGW8lY17MI7wlPySXt9dVV_n8",
    authDomain: "notasweb-c61f9.firebaseapp.com",
    projectId: "notasweb-c61f9",
    storageBucket: "notasweb-c61f9.appspot.com",
    messagingSenderId: "155908391104",
    appId: "1:155908391104:web:ff0ef5c774065a44b66d25",
    measurementId: "G-V82LYBWVDV"
};


if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;
