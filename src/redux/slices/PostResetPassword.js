import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.RESET_PASSWORD;

export const postResetPassword = createAsyncThunk('postResetPassword', async function (data) {
  try {
    const response = await axios.post(URL, data);
    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (err) {
    throw err.response.status;
  }
});

const initialState = { data: '', error: '', loading: false };

const postResetPasswordSlice = createSlice({
  name: 'postResetPasswordSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postResetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(postResetPassword.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = '';
    });
    builder.addCase(postResetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = '';
    });
  },
});
export default postResetPasswordSlice.reducer;
