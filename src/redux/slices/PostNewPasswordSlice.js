import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.NEW_PASSWORD;

export const postNewPassword = createAsyncThunk(
  'postResetPassword',
  async function ({ code, value }) {
    try {
      const response = await axios.post(URL + code + '/', { password: value.password });
      if (response.status === 200) {
        const data = await response.data;
        return data;
      }
    } catch (err) {
      throw err.response.status;
    }
  },
);

const initialState = { data: '', error: '', loading: false };

const postNewPasswordSlice = createSlice({
  name: 'postNewPasswordSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postNewPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(postNewPassword.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = '';
    });
    builder.addCase(postNewPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = '';
    });
  },
});
export default postNewPasswordSlice.reducer;
