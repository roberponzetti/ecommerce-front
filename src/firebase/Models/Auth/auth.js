import { Firebase } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export class Auth extends Firebase {
  constructor(nameCollection) {
    super();
    this._nameCollection = nameCollection;
  }

  async login(email, password) {

    const userResponse = {};

    try {
      const userCredential = await signInWithEmailAndPassword(this._auth, email, password)
      userResponse.user = userCredential.user;
    } catch (error) {
      userResponse.error = error.message;
    }

    return userResponse;

  }

  async register(email, password) {

    const userResponse = {};

    try {
      const userCredential = await createUserWithEmailAndPassword(this._auth, email, password)
      userResponse.user = userCredential.user;
    } catch (error) {
      userResponse.error = error.message;
    }

    return userResponse;

  }
}
