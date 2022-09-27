import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from "notiflix";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const tokenAuth = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


export const signIn = createAsyncThunk('auth/register', async credentials => {
 
  try {
    const { data } = await axios.post('/users/signup', credentials);
    tokenAuth.set(data.token);
    Notify.success("SignIn success!", { position: 'right-bottom'});
    return data;
  } catch (error) {
    Notify.failure("Error!", { position: 'right-bottom'});
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
      
    tokenAuth.set(data.token);
    Notify.success("LogIn success!", { position: 'right-bottom'});
    return data;
  } catch (error) {
    Notify.failure("Error!", { position: 'right-bottom'});
  }
});


export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    tokenAuth.unset();
    Notify.info("LogOut success!", { position: 'right-bottom'});
  } catch (error) {
    Notify.failure("Error!", { position: 'right-bottom'});
  }
});


export const getRefresh = createAsyncThunk('auth/refresh', async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue('Oops!');
    }

    try {
      tokenAuth.set(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      Notify.failure("Error!", { position: 'right-bottom'});
      
    }
  }
);