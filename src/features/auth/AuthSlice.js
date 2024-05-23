// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authState: "signIn",
    email: "",
    password: "",
    verificationCode: "",
    isLoading: false,
    user: null,
    error: null,
  },
  reducers: {
    setAuthState: (state, action) => {
      state.authState = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setVerificationCode: (state, action) => {
      state.verificationCode = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setAuthState,
  setEmail,
  setPassword,
  setVerificationCode,
  setLoading,
  setUser,
  setError,
} = authSlice.actions;

export default authSlice.reducer;
