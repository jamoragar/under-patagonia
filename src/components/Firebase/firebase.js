import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage'

import {history} from '../Routes/Routes';

// FIREBASE - PRODUCTION VERSION

var firebaseConfig = {
    apiKey: "AIzaSyAwY8zrKGC-9dSAJGmAkme8w_D19yxZML8",
    authDomain: "models-gallery-puq.firebaseapp.com",
    databaseURL: "https://models-gallery-puq.firebaseio.com",
    projectId: "models-gallery-puq",
    storageBucket: "",
    messagingSenderId: "608348651644",
    appId: "1:608348651644:web:606807bb235293fd"
  };

  // FIREBASE - DEVELOPMENT VERSION

  // var firebaseConfig = {
  //   apiKey: "AIzaSyBPfCnVzbx7eIcz8sJnzIHZF2_R8g44T-c",
  //   authDomain: "models-gallery-puq-dev.firebaseapp.com",
  //   databaseURL: "https://models-gallery-puq-dev.firebaseio.com",
  //   projectId: "models-gallery-puq-dev",
  //   storageBucket: "models-gallery-puq-dev.appspot.com",
  //   messagingSenderId: "154078497677",
  //   appId: "1:154078497677:web:f5d55f4168d22c2e894bc4",
  //   measurementId: "G-098XRMTG38"
  // };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

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