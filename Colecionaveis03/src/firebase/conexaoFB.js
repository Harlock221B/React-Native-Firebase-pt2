import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDzccW3XSA6MN0h2RZIpadQouLp6EGdwUs",
    authDomain: "colecionaveisfb-a49e5.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-a49e5.firebaseio.com",
    projectId: "colecionaveisfb-a49e5",
    storageBucket: "colecionaveisfb-a49e5.appspot.com",
    messagingSenderId: "163549118696",
    appId: "1:163549118696:web:282fbd719bbbfa5fdb495d",
    measurementId: "G-SC8C4W43KY"
  };

    var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();