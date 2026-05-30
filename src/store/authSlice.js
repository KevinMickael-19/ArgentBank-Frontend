import { createSlice } from "@reduxjs/toolkit";
import { loginUser, getUserProfile } from "./authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null,
      state.user = null,
      state.loading = false,
      state.error = null
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions
