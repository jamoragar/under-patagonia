import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage'

import {history} from '../Routes/Routes';

var firebaseConfig = {
    apiKey: "AIzaSyAwY8zrKGC-9dSAJGmAkme8w_D19yxZML8",
    authDomain: "models-gallery-puq.firebaseapp.com",
    databaseURL: "https://models-gallery-puq.firebaseio.com",
    projectId: "models-gallery-puq",
    storageBucket: "",
    messagingSenderId: "608348651644",
    appId: "1:608348651644:web:606807bb235293fd"
  };
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