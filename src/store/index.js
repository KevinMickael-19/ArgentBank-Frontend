import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const token = sessionStorage.getItem("token");

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: {
    auth: {
      token: token || null,
      user: null,
      loading :false,
      error: null
    }
  }
});

export default store;
