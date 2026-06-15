import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser as loginUserApi,
  getUserProfile as getUserProfileApi,
  updateUserProfile as updateUserProfileApi,
} from "../services/api";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    return loginUserApi({ email, password });
  }
);

export const getUserProfile = createAsyncThunk(
  "auth/profile",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    return getUserProfileApi(token);
  }
);

export const updateUserName = createAsyncThunk(
  "auth/updateUserName",
  async (userName, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    return updateUserProfileApi(token, userName);
  }
);