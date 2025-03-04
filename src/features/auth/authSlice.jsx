import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: sessionStorage.getItem("token") || null,
  user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null,
  isLoggedOut: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    credentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedOut = false;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isLoggedOut = true;
      sessionStorage.clear();
    },
  },
});

export const { credentials, logout } = authSlice.actions;
export default authSlice.reducer;
