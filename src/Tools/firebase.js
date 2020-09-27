//Firebase
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAdjoRZMeHEepsWXt8Kr-xlQhxDeA8XRhY",
  authDomain: "fullroomapp.firebaseapp.com",
  databaseURL: "https://fullroomapp.firebaseio.com",
  projectId: "fullroomapp",
  storageBucket: "fullroomapp.appspot.com",
  messagingSenderId: "1004214766204",
  appId: "1:1004214766204:web:47d527d434bec9c2a117f9",
  measurementId: "G-THDSVZ57F2"
};

const app = firebase.initializeApp(firebaseConfig);

export default app