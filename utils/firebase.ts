import firebase from 'firebase';
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDmjXv0oWrPqAIlwvoeu0NcCEtyyR69xT4",
    authDomain: "qp-chat-4701c.firebaseapp.com",
    databaseURL: "https://qp-chat-4701c.firebaseio.com",
    projectId: "qp-chat-4701c",
    storageBucket: "qp-chat-4701c.appspot.com",
    messagingSenderId: "336079964166",
    appId: "1:336079964166:web:aca847393bfdb5874ddb87",
    measurementId: "G-HE37LFPEYT"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
    const Firebase = firebase;
  // firebase.analytics();

export default Firebase;

  export const database = firebase.database();
  export const auth = firebase.auth();