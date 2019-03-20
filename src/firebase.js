import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA0mHlUaKNPsvee2ii32_BdFrow3hIEIMw",
  authDomain: "doomsday-clone-609b1.firebaseapp.com",
  databaseURL: "https://doomsday-clone-609b1.firebaseio.com",
  projectId: "doomsday-clone-609b1",
  storageBucket: "doomsday-clone-609b1.appspot.com",
  messagingSenderId: "949635181031"
};
firebase.initializeApp(config);

export default firebase;


