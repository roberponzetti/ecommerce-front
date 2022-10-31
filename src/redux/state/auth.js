import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, setLocalStorage } from "../../utilities/localStorage";


const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      setLocalStorage("USER", payload);
      state.user = payload
    },
    logoutUser: (state) => {
      clearLocalStorage();
      state.user = null
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export const selectAuth = (state) => state.auth;
