import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const res = await axios.post('/users/signup', credentials);

    return res.data;
  } catch (error) {}
});

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    const { data } = await axios.post('/users/logout', credentials);
    return data;
  } catch (error) {}
});

const authOperations = {
  register,
  logIn,
  logOut,
};

export default authOperations;
