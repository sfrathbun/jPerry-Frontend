import firebase from "firebase";
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDZntJShTTjq4u8vQRkrGK8ORnUghTZ6oU",
    authDomain: "jperryministries-f6d46.firebaseapp.com",
    databaseURL: "https://jperryministries-f6d46.firebaseio.com",
    projectId: "jperryministries-f6d46",
    storageBucket: "jperryministries-f6d46.appspot.com",
    messagingSenderId: "571566052956",
    appId: "1:571566052956:web:cdb028c13b3dd91dcef899",
    measurementId: "G-W3C92HX1LG"
};
firebase.initializeApp( config );
export const auth = firebase.auth;
export const storage = firebase.storage();
export const db = firebase.database();