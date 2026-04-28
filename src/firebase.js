import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqjREXxBnKBOMZtguUt3aTtNAfwYzSY18",
  authDomain: "placementiq-e3f89.firebaseapp.com",
  projectId: "placementiq-e3f89",
  storageBucket: "placementiq-e3f89.appspot.com",
  messagingSenderId: "139756289271",
  appId: "1:139756289271:web:7a8291b4b66140660567f2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();