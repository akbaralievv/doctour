import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';
import { act } from 'react-dom/test-utils';
import { useSelector } from 'react-redux';

const URL = links.CONFIRM_USER;

export const postConfirm = createAsyncThunk('postConfirm', async function (data) {
  try {
    const response = await axios.post(URL, data);
    if (response.status === 202) {
      const data = await response.data;
      return data;
    }
  } catch (err) {
    throw err.response.status;
  }
});

const initialState = { data: '', error: '', loading: false };

const postConfirmSlice = createSlice({
  name: 'postConfirmSlice',
  initialState,
  reducers: {
    clearData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postConfirm.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(postConfirm.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = '';
    });
    builder.addCase(postConfirm.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = '';
    });
  },
});
export const { clearData } = postConfirmSlice.actions;
export default postConfirmSlice.reducer;
