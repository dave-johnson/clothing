import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBM1VXf0jIRas1FcuXmH-zm9w0MvfU8IuM",
    authDomain: "crown-db-b7a7f.firebaseapp.com",
    databaseURL: "https://crown-db-b7a7f.firebaseio.com",
    projectId: "crown-db-b7a7f",
    storageBucket: "",
    messagingSenderId: "732676572470",
    appId: "1:732676572470:web:4114835219cabb0a"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase