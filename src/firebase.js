import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDwET9DroVo0qggKtCr7g714khgyaet6Z4",
  authDomain: "meteo-directo.firebaseapp.com",
  databaseURL: "https://meteo-directo.firebaseio.com",
  projectId: "meteo-directo",
  storageBucket: "meteo-directo.appspot.com",
  messagingSenderId: "14581652904",
  appId: "1:14581652904:web:514ac2ae0a879b03bbd19d",
  measurementId: "G-69RHBWHJJK"
});

export const auth = app.auth();
export const firestore = app.firestore();  
export default app;