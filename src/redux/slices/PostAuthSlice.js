import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';
import { act } from 'react-dom/test-utils';
import { useDispatch } from 'react-redux';

const URL = links.LOGIN_URL;

export const postAuthSlice = createAsyncThunk('postAuthSlice', async function (value) {
  try {
    const response = await axios.post(URL, value);
    if (response.status === 200) {
      const data = await response.data;
      return data;
    } else {
      throw Error(`error ${response.status}`);
    }
  } catch (err) {
    setAuth(err.response.data.detail);
    return console.error(err.message);
  }
});

const initialState = { data: '', error: '', loading: false };

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postAuthSlice.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(postAuthSlice.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(postAuthSlice.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
