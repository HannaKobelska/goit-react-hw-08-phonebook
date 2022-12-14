import { createSlice } from '@reduxjs/toolkit';
import { signIn, logIn, logOut, getRefresh } from './auth-operations';


const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLogin: false,
  isFetching: false,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    },

    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    },
    
    [logOut.fulfilled]: (state, _) => {
      state.token = '';
      state.user = { name: '', email: '' };
      state.isLogin = false;
    },
    
    [getRefresh.pending]: (state, { payload }) => {
      state.isLogin = false;
      state.isFetching = true;
    },
    
    [getRefresh.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLogin = true;
      state.isFetching = false;
    },
    
    [getRefresh.rejected]: (state, { payload }) => {
      state.isLogin = false;
      state.isFetching = false;
    },
  },
});

export default authSlice.reducer;