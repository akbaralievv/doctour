import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.RESET_PHONE_CODE;

export const postResetCode = createAsyncThunk('postResetCode', async function (data) {
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

const postResetCodeSlice = createSlice({
  name: 'postResetPasswordSlice',
  initialState,
  reducers: {
    clearDataReset: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postResetCode.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(postResetCode.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = '';
    });
    builder.addCase(postResetCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = '';
    });
  },
});
export const { clearDataReset } = postResetCodeSlice.actions;
export default postResetCodeSlice.reducer;
