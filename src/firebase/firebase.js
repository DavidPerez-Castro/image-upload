import firebase from 'firebase/app';
import 'firebase/storage'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAGTn2uHYIxe3id4Ah-wh9GtyvVl9YTAvU",
    authDomain: "fir-upload-image-91477.firebaseapp.com",
    projectId: "fir-upload-image-91477",
    storageBucket: "fir-upload-image-91477.appspot.com",
    messagingSenderId: "358888662627",
    appId: "1:358888662627:web:3f506fe205496ac7a6ba56"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()


export  {
    storage, firebase as default
  } 