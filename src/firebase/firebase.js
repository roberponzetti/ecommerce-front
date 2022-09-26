import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getFirestore } from "firebase/firestore";

export class Firebase {
    constructor() {
      this._initializeApp = initializeApp(firebaseConfig);
      this._db = getFirestore(this._initializeApp);
    }
  }