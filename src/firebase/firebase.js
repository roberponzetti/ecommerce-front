import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export class Firebase {
  constructor() {
    this._initializeApp = initializeApp(firebaseConfig);
    this._db = getFirestore(this._initializeApp);
    this._auth = getAuth(this._initializeApp);
  }
}
