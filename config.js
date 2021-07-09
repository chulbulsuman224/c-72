import * as firebase from 'firebase/app'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCxe97cvS-g7Nn6J1v5dUBBLbDzG2WmE4U",
    authDomain: "wireless-library-3abc1.firebaseapp.com",
    projectId: "wireless-library-3abc1",
    storageBucket: "wireless-library-3abc1.appspot.com",
    messagingSenderId: "463366556697",
    appId: "1:463366556697:web:5e5f9cb19347ad81166e88",
    measurementId: "G-DNV6NNQ346"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore() ;
