import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';

import {history} from '../Routes/Routes';

// FIREBASE - PRODUCTION VERSION

var firebaseConfig = {
  apiKey: "AIzaSyAwY8zrKGC-9dSAJGmAkme8w_D19yxZML8",
  authDomain: "models-gallery-puq.firebaseapp.com",
  databaseURL: "https://models-gallery-puq.firebaseio.com",
  projectId: "models-gallery-puq",
  storageBucket: "models-gallery-puq.appspot.com",
  messagingSenderId: "608348651644",
  appId: "1:608348651644:web:606807bb235293fd",
  measurementId: "G-PJWKX2KJ7M"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const LogIn = (email,pswd) => {
    firebase.auth()
        .signInWithEmailAndPassword(email, pswd)
        .then((user) => {
            if(user){
              return true
              // history.push('/Dashboard');
            }
            else{
              return false
            }
          })
            .catch((error) => {
              console.log(error);
            });
  }

export const LogOut = () => {
    firebase.auth().signOut().then(()=>{
      history.push('/');
    })
  }

  export const Storage = () => {
    firebase.storage().ref();
  }


export default firebase;