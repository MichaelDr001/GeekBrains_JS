import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDEJyB2YN5y-cUdrmn1kL7pQOXsVKLavbE",
    authDomain: "gb-react-1.firebaseapp.com",
    projectId: "gb-react-1",
    storageBucket: "gb-react-1.appspot.com",
    messagingSenderId: "1006791054912",
    appId: "1:1006791054912:web:64dbb50ef22fcb715431a5"
  }

const firebaseDB = firebase.initializeApp(firebaseConfig)
export const db = firebase.database().ref()
export const auth = firebase.auth()