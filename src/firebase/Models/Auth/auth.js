import { Firebase } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

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

  async register(email, password, name) {

    const userResponse = {};

    try {
      const userCredential = await createUserWithEmailAndPassword(this._auth, email, password)
      await updateProfile(this._auth.currentUser, { displayName: name })

      userResponse.user = userCredential.user;

    } catch (error) {
      userResponse.error = error.message;
    }

    return userResponse;

  }
}
