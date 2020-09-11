import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBDDzGDDvUfxzfiKSHH9YYRj-XWoCfDdJ0",
  authDomain: "clone-e97a0.firebaseapp.com",
  databaseURL: "https://clone-e97a0.firebaseio.com",
  projectId: "clone-e97a0",
  storageBucket: "clone-e97a0.appspot.com",
  messagingSenderId: "304567654071",
  appId: "1:304567654071:web:aa4b2d6ecbe833a9af9f32"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }