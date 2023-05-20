import { initializeApp, getApps, getApp } from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
      apiKey: "AIzaSyD5sm7PbfTGQ7ytzPqA6wHw7zN5bdqh78k",
      authDomain: "webshop-c2120.firebaseapp.com",
      projectId: "webshop-c2120",
      storageBucket: "webshop-c2120.appspot.com",
      messagingSenderId: "872470488345",
      appId: "1:872470488345:web:469ffb69bd646d3abf9188",
      measurementId: "G-LJ3PTWZMC5"
}

// initialize firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const initFirebase = () => {
      return app
}