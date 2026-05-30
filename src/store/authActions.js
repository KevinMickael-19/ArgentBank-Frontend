import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser as loginUserApi,
  getUserProfile as getUserProfileApi,
  updateUserProfile as updateUserProfileApi,
} from "../services/api";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    return await loginUserApi({ email, password });
  },
);

export const getUserProfile = createAsyncThunk("auth/profile", async (token) => {
  return await getUserProfileApi(token);
});

export const updateUsername = createAsyncThunk(
  "auth/updateUsername" ,
  async ({token, userName}) => {
    return await updateUserProfileApi(token, userName)
  }
)