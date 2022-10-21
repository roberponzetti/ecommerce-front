import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../redux/state/auth";


export const useAuth = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userCredencial = {
          displayName: user.displayName,
          email: user.email,
        }
        dispatch(loginUser(userCredencial));
      } else {
        dispatch(logoutUser());
      }
    });
  }, [dispatch])
}
