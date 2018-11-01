import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDB4f9z1rq0Gh8PC-xlWUa8V5LmyGNFkSA",
  authDomain: "project-manager-2651d.firebaseapp.com",
  databaseURL: "https://project-manager-2651d.firebaseio.com",
  projectId: "project-manager-2651d",
  storageBucket: "project-manager-2651d.appspot.com",
  messagingSenderId: "108231830446"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
