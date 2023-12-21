import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess: (state, action) => {
      console.log('loginUser action is called');
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  loginStart,
  loginUserSuccess,
  loginUserFailure,
  logoutUser,
} = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice;


