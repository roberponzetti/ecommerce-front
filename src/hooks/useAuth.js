import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../redux/state/auth";
import { getLocalStorage } from "../utilities/localStorage";


export const useAuth = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const currentUser = getLocalStorage("USER");
    onAuthStateChanged(auth, (user) => {
      if (user && currentUser) {
        const userCredencial = {
          displayName: user.displayName,
          email: user.email,
        }
        dispatch(loginUser(userCredencial));
      }
    });
  }, [dispatch])
}
