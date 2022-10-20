import { Auth } from "./auth";

export const authLogin = async (email, password) => {
  const auth = new Auth();
  return await auth.login(email, password);
};

export const authRegister = async (email, password) => {
  const auth = new Auth();
  return await auth.register(email, password);
};
