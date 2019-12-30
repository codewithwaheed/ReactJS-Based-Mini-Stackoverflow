import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyCQ5b3_Nd1L3Uu780jrrfZUoTz6Wv8ttWo",
    authDomain: "projecttest-c7dad.firebaseapp.com",
    databaseURL: "https://projecttest-c7dad.firebaseio.com",
    projectId: "projecttest-c7dad",
    storageBucket: "projecttest-c7dad.appspot.com",
    messagingSenderId: "867617964118",
    appId: "1:867617964118:web:6860c99bc7dc4b55e5fbf7",
    measurementId: "G-7XR9BTRND5"
  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire;