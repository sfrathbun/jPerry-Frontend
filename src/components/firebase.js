import firebase from "firebase";
const config = {
    apiKey: "AIzaSyDZntJShTTjq4u8vQRkrGK8ORnUghTZ6oU",
    authDomain: "jperryministries-f6d46.firebaseapp.com",
    databaseURL: "https://jperryministries-f6d46.firebaseio.com"
};
firebase.initializeApp( config );
export const auth = firebase.auth;

export const db = firebase.database();