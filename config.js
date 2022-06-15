import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA3L57kBijwmXDQisd6zeD7kMoLG7xVgZg",
  authDomain: "cicrista2-0.firebaseapp.com",
  projectId: "cicrista2-0",
  storageBucket: "cicrista2-0.appspot.com",
  messagingSenderId: "475827328412",
  appId: "1:475827328412:web:70d89fbdac56b3d38ea459"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
