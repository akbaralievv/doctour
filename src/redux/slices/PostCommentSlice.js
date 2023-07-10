import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.COMMENT_URL;
const accessToken = localStorage.getItem('access_token') || '';
const headers = { Authorization: `Bearer ${accessToken}` };

export const postComment = createAsyncThunk('postComment', async function (data) {
  try {
    const response = await axios.post(URL, data, headers);
    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (err) {
    throw err.response.status;
  }
});

const initialState = { data: [], error: '', loading: false };

const postCommentSlice = createSlice({
  name: 'postCommentSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(postComment.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = [];
    });
    builder.addCase(postComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});

export default postCommentSlice.reducer;
