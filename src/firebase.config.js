import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCPq40NtvrA2jvzlWvpKAZurDLL7oGFbR4",
    authDomain: "restaurantapp-74e7e.firebaseapp.com",
    databaseURL: "https://restaurantapp-74e7e-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-74e7e",
    storageBucket: "restaurantapp-74e7e.appspot.com",
    messagingSenderId: "416759261810",
    appId: "1:416759261810:web:35365f29b683579690b0eb"
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }