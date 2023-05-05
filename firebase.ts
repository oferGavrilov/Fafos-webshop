import * as firebase from "firebase/app";
import 'firebase/auth'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
      apiKey: "AIzaSyC2Y-pVEShZN4vUrqdAyOzD123Nbd3S9CM",
      authDomain: "webshop-74e48.firebaseapp.com",
      projectId: "webshop-74e48",
      storageBucket: "webshop-74e48.appspot.com",
      messagingSenderId: "28728582100",
      appId: "1:28728582100:web:46254c2d98b59580f9c041",
      measurementId: "G-CZ07239E1W"
};
const app = !firebase.getApps().length ? firebase.initializeApp(firebaseConfig) : firebase.getApp()

export const auth = getAuth(app)
export default app