import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.USERS_URL + 'login/';

export const postAuthSlice = createAsyncThunk('postAuthSlice', async function (value) {
  try {
    const response = await axios.post(URL, value);
    if (response.status === 200) {
      const data = await response.data;
      localStorage.setItem('access_token', JSON.stringify(data.access));
      localStorage.setItem('refresh_token', JSON.stringify(data.refresh));
      return data.access;
    }
  } catch (err) {
    throw err.response.status;
  }
});

const initialState = {
  data: '',
  error: '',
  loading: false,
  access_token: !!localStorage.getItem('access_token'),
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    clearDataAuth: (state, action) => {
      state.data = action.payload;
    },
    removeAccessToken: (state, action) => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      state.access_token = !!localStorage.getItem('access_token');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postAuthSlice.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
      state.access_token = !!localStorage.getItem('access_token');
    });
    builder.addCase(postAuthSlice.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = '';
    });
    builder.addCase(postAuthSlice.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = '';
    });
  },
});
export const { clearDataAuth, removeAccessToken } = authSlice.actions;

export default authSlice.reducer;
