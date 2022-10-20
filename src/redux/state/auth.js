import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload
    },
    logoutUser: (state) => {
      state.user = null
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export const selectAuth = (state) => state.auth;
