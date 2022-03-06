import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBfys4FJ8tjxf0e0YIBC1r0v1YCOVj86dQ",
    authDomain: "vue-chat-room-46d74.firebaseapp.com",
    projectId: "vue-chat-room-46d74",
    storageBucket: "vue-chat-room-46d74.appspot.com",
    messagingSenderId: "1076960969318",
    appId: "1:1076960969318:web:097d186854a22ebdc2e3a7",
    measurementId: "G-3YN186X96M"
  };

// Init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp}