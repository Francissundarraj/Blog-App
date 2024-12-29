
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyABPc_VpQyk6gRH1Ati_Z-LYApbZLDpVxg",
  authDomain: "blog-app-project-2b399.firebaseapp.com",
  projectId: "blog-app-project-2b399",
  storageBucket: "blog-app-project-2b399.firebasestorage.app",
  messagingSenderId: "539219475857",
  appId: "1:539219475857:web:8db9707016520901036e30",
  measurementId: "G-HJ01V5WL1B"
}; 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth